import React from "react";
import NoteCard from "./notecard";
import styles from "./notelist.module.css";
const notelist = props => {
  const notes = props.notes.map(note => {
    return <NoteCard key={note.id} note={note} clicked={props.clicked} />;
  });
  return (
    <div className={styles.notes}>
      {notes}
      <NoteCard key="-1" newCard={props.newCard} />
    </div>
  );
};

export default notelist;
