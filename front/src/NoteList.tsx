import { useEffect, useState } from "react";

import { apiService } from "./api.service";
import { CreateNote } from "./CreateNote";
import { Navbar } from "./Navbar";
import { NoteListItem } from "./NoteListItem";
import { Note } from "./types";

export const NoteList = () => {
  const loadNotes = () => {
    apiService.getNotes().then((notes) => {
      setNotes(notes);
    });
  }
  const [notes, setNotes] = useState<Array<Note>>([]);
  useEffect(() => {
    loadNotes();
  }, []);

  const submitHandler = (content: string) => {
    apiService
      .createNote(content)
      .then(loadNotes)
  };

  const deleteNoteHandler = (id: string) => {
    apiService
      .deleteNote(id)
      .then(loadNotes);
  };

  return (
    <div>
      <h1>List</h1>
      <Navbar title="List"></Navbar>
      <div>
        {notes.map((note) => (
          <NoteListItem
            note={note}
            key={note.id}
            onDelete={deleteNoteHandler}
          ></NoteListItem>
        ))}
      </div>
      <CreateNote onSubmit={submitHandler} />
    </div>
  );
};
