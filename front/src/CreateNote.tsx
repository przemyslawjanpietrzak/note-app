import { FormEventHandler, useState } from "react";

interface Props {
  onSubmit: (content: string) => void;
}

export const CreateNote = ({ onSubmit }: Props) => {
  const [content, setContent] = useState("");
  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(content);
    setContent("");
  };

  return (
    <div className="card">
      <div className="card-title">
        Note
      </div>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="row">
            <textarea
              name="content"
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
          <div className="row">
            <button type="submit">Zapisz</button>
          </div>
        </form>
      </div>
    </div>
  );
};
