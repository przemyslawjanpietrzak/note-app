class NoteRepository {
    constructor() {
        this._notes = [
            { id: '1', content: 'test note', createdAt: +Date.now() },
        ];
    }

    getAll() {
        return [...this._notes].sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
    }

    find(noteId) {
        return this._notes.find(({ id }) => id === noteId) || null;
    }

    create(content) {
        const newNote = { id: this._createId(), createdAt: +Date.now(), content };
        this._notes.push(newNote);

        return newNote;
    }

    delete(noteId) {
        this._notes = this._notes.filter(({ id }) => id !== noteId);

        return { id: noteId };
    }

    _createId() {
        return `${this._notes.length + 1}`;
    }
}

module.exports.noteRepository = new NoteRepository();