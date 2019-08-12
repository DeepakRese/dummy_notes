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
        style={{ width: "100%", height: "450px", margin: "5px" }}
        onChange={e => contentChange(e.target.value)}
        value={note.content}
      />
    );
  }
  return (
    <div
      style={{
        left: "180px",
        position: "fixed",
        width: "auto",
        right: "0px",
        margin: "10px"
      }}
    >
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
