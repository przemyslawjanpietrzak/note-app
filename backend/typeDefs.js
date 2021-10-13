const { gql } = require('apollo-server');
const { NoteRepository } = require('./repository');

module.exports.typeDefs = gql`
  scalar Date

  type Note {
    id: ID
    content: String
    createdAt: Date
  }

  type Query {
    notes: [Note]
    note(noteId: String): Note
  }

  type Mutation {
    createNote(content: String): Note
    deleteNote(noteId: String): Note
  }
`;

