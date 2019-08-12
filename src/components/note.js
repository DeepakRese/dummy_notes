import React from "react";
import Title from "./notetitle";
const note = props => {
  let content = null;
  content = <p>{props.notes.content}</p>;
  let note = props.notes;

  const contentChange = content => {
    note.content = content;
    props.update(note);
  };
  const titleChange = title => {
    note.title = title;
    props.update(note);
  };
  if (props.notes.edit) {
    content = (
      <textarea
        style={{ width: "100%", height: "400px", margin: "5px" }}
        onChange={e => contentChange(e.target.value)}
      >
        {note.content}
      </textarea>
    );
  }
  return (
    <div style={{ left: "200px", position: "fixed" }}>
      <Title
        notes={props.notes}
        edit={props.edit}
        delete={props.delete}
        change={titleChange}
      />
      {content}
    </div>
  );
};

export default note;
