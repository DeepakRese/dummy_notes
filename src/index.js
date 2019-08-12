import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Notes from "./containers/notes";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <Notes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
