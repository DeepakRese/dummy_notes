import React from "react";
import styles from "./notecard.module.css";
import Aux from "../Auxillary";
import { Icon } from "semantic-ui-react";
const notecard = props => {
  let card = null;

  card = (
    <div className={styles.card} onClick={props.newCard}>
      <Icon name="plus square outline" size="large" className={styles.icon} />
    </div>
  );
  if (props.note) {
    card = (
      <div className={styles.card} onClick={() => props.clicked(props.note.id)}>
        <p>{props.note.title}</p>
      </div>
    );
  }

  return <Aux>{card}</Aux>;
};

export default notecard;
