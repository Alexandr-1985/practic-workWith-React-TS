import React, { useState } from "react";
import { v1 } from "uuid";
import NoteList from "./components/noteList/NoteList";
import "./App.css";
import { LinearProgress } from "@mui/material";

function App() {
  const addNote = (title: string) => {};
  const removeNote = (id: string) => {};
  const changeTitle = (id: string, title: string) => {};
  return (
    <div className="App">
      <NoteList
        addNote={addNote}
        removeNote={removeNote}
        changeTitle={changeTitle}
        notes={notes}
      />
      <LinearProgress />
    </div>
  );
}

export default App;
