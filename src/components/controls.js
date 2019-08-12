import React from "react";
import Aux from "../Auxillary";
import { Icon } from "semantic-ui-react";

const controls = props => (
  <Aux>
    <Icon name="edit" onClick={() => props.edit(props.note)} />
    <Icon name="delete" onClick={() => props.delete(props.id)} />
  </Aux>
);

export default controls;
