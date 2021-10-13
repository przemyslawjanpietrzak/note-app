import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import { Note } from "./types";

interface Props {
  note: Note;
  onDelete: (id: string) => void;
}

export const NoteListItem = ({ note, onDelete }: Props) => {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <ReactMarkdown>{note.content}</ReactMarkdown>
              </div>
              <p className="card-text">
                <Link to={`/${note.id}`}>
                  {new Date(note.createdAt).toDateString()}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <button className="btn btn-danger" onClick={() => onDelete(note.id)}>
            Usuń
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr />
        </div>
      </div>
    </div>
  );
};
