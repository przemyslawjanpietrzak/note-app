const { noteRepository } = require('./repository');

module.exports.resolvers = {
    Query: {
        async note(_, { noteId }) {
            return noteRepository.find(noteId);
        },
        async notes(_, __, context) {
            return noteRepository.getAll();
        },
    },
    
    Mutation: {
        async createNote(_, { content }) {
           return noteRepository.create(content);
        },
        async deleteNote(_, { noteId }) {
            return noteRepository.delete(noteId);
        },
    },
}