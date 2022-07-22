import React, { useState } from "react";
import { v1 } from "uuid";
import NoteList from "./components/noteList/NoteList";
import "./App.css";
import { LinearProgress } from "@mui/material";

export type noteType = {
  id: string;
  title: string;
  priority: "important" | "unimportant";
};
function App() {
  const [notes, setNote] = useState<Array<noteType>>([
    { id: v1(), title: "Learn HTML", priority: "important" },
    { id: v1(), title: "Learn JS", priority: "unimportant" },
  ]);
  const addNote = (title: string) => {
    const newNote: noteType = {
      id: v1(),
      title: title,
      priority: "unimportant",
    };
    setNote([newNote, ...notes]);
  };
  const removeNote = (id: string) => {
    setNote(notes.filter((n) => n.id !== id));
  };
  const changeTitle = (id: string, title: string) => {
    setNote(notes.map((n) => (n.id === id ? { ...n, title: title } : n)));
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
