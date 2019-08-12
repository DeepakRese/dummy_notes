import React, { Component } from "react";
import Note from "../components/note";
import NoteList from "../components/notelist";
class notes extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "test",
        content: "dummy content",
        edit: false
      }
    ],
    id: 1,
    displaynote: {
      id: 0,
      title: "test",
      content: "dummy content",
      edit: false
    }
  };

  deletenote = id => {
    console.log("delete" + id);
    console.log(this.state.notes);
    const notes = this.state.notes;
    const updatedNotes = notes.filter(note => note.id !== id);
    this.setState({ notes: updatedNotes });
    this.noteClick(0);
  };
  editnote = currentnote => {
    const notes = this.state.notes;
    const updatedNotes = notes.map(note => {
      if (note.id === currentnote.id) {
        note.edit = !currentnote.edit;
      }
      return note;
    });
    const note = updatedNotes.filter(n => n.id === currentnote.id);
    this.setState({
      note: updatedNotes,
      displaynote: note[0]
    });
  };
  updatenote = currentnote => {
    const notes = this.state.notes;
    const updatedNotes = notes.map(note => {
      if (note.id === currentnote.id) {
        note.title = currentnote.title;
        note.content = currentnote.content;
      }
      return note;
    });
    const note = updatedNotes.filter(n => n.id === currentnote.id);
    this.setState({
      note: updatedNotes,
      displaynote: note[0]
    });
    console.log("updated note");
  };
  addnote = () => {
    const notes = this.state.notes;
    let newnote = {
      title: "title",
      content: "dummy content",
      edit: false
    };
    const id = this.state.id;
    newnote.id = id;
    this.setState({
      notes: [...notes, newnote],
      id: id + 1,
      displaynote: newnote
    });
  };
  noteClick = id => {
    let note = this.state.notes.filter(n => n.id === id);
    this.setState({
      displaynote: note[0]
    });
  };
  render() {
    return (
      <div>
        <NoteList
          notes={this.state.notes}
          clicked={this.noteClick}
          newCard={this.addnote}
        />
        <Note
          notes={this.state.displaynote}
          edit={this.editnote}
          delete={this.deletenote}
          update={this.updatenote}
        />
      </div>
    );
  }
}
export default notes;
