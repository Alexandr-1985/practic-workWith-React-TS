import React, { useState } from "react";
import { v1 } from "uuid";
import NoteList from "./components/noteList/NoteList";
import "./App.css";
import { LinearProgress } from "@mui/material";
import {
  noteType,
  addNoteAC,
  removeNoteAC,
  changeTitleAC,
} from "./bll/noteListReducer";
import { AppRootState } from "./bll/state";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const notes = useSelector<AppRootState, Array<noteType>>(
    (state) => state.noteList
  );
  const dispatch = useDispatch();

  const addNote = (title: string) => {
    dispatch(addNoteAC(title));
  };
  const removeNote = (id: string) => {
    dispatch(removeNoteAC(id));
  };
  const changeTitle = (id: string, title: string) => {
    dispatch(changeTitleAC(id, title));
  };

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
