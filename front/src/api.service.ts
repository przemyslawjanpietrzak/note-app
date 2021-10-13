import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { Note } from "./types";

class ApiService {
  private client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache({}),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }
  });

  async getNotes() {
    const response = await this.client.query<{ notes: Array<Note> }>({
      query: gql`
        query GetNotes {
          notes {
            id
            content
            createdAt
          }
        }
      `,
    });

    return response.data.notes;
  }

  async getNote(noteId: string) {
    const response = await this.client.query<{ note: Note }>({
      query: gql`
        query GetNote($noteId: String) {
          note(noteId: $noteId) {
            id
            content
            createdAt
          }
        }
      `,
      variables: { noteId },
    });

    return response.data.note;
  }

  async createNote(content: string) {
    const response =  await this.client.mutate<{ createNote: Note }>({
      mutation: gql`
        mutation CreateNote($content: String) {
          createNote(content: $content) {
            id
            content
            createdAt
          }
        }
    `,
      variables: { content },
    });

    return response.data?.createNote as Note;
  }

  async deleteNote(noteId: string) {
    const response = await this.client.mutate<void>({
      mutation: gql`
        mutation DeleteNote($noteId: String) {
          deleteNote(noteId: $noteId) {
            id
          }
        }
    `,
      variables: { noteId },
    });
  }

}

export const apiService = new ApiService();
