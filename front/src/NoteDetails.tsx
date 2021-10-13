import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { apiService } from "./api.service";
import { Note } from "./types";
import { Navbar } from "./Navbar";

export const NoteDetails = () => {
  const [note, setNote] = useState<Note | null>(null);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    apiService.getNote(id).then((note) => {
      setNote(note);
    });
  }, []);

  const goToNoteListView = () => {
    history.push("/");
  };

  const deleteNoteHandler = (id: string) => {
    apiService.deleteNote(id).then(() => {
      goToNoteListView();
    });
  };

  return (
    <div>
      <Navbar title="Item"></Navbar>
      {note !== null ? (
        <div className="card">
          <div className="card-body">
            <button
              className="btn btn-secondary"
              onClick={() => goToNoteListView()}
            >
              Wróć do listy
            </button>
            <ReactMarkdown>{note.content}</ReactMarkdown>
            <button
              className="btn btn-danger"
              onClick={() => deleteNoteHandler(note.id)}
            >
              Usuń
            </button>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};
