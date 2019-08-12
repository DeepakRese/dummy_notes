import React from "react";
import Controls from "./controls";
import styles from "./notetitle.module.css";
const title = props => {
  let title = null;

  if (props.notes.edit) {
    title = (
      <input
        value={props.notes.title}
        onChange={e => props.change(e.target.value)}
      />
    );
  } else {
    title = <h1>{props.notes.title}</h1>;
  }
  return (
    <div className={styles.title}>
      {title}
      <Controls
        className={styles.button}
        id={props.notes.id}
        edit={props.edit}
        delete={props.delete}
        note={props.notes}
      />
    </div>
  );
};

export default title;
