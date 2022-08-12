import { useState } from "react";
import { idText } from "typescript";
import { v1 } from "uuid";

export type noteType = {
  id: string;
  title: string;
  priority: "important" | "unimportant";
};

const initialState: Array<noteType> = [];

// const [notes, setNote] = useState<Array<noteType>>([
//   { id: v1(), title: "Learn HTML", priority: "important" },
//   { id: v1(), title: "Learn JS", priority: "unimportant" },
// ]);

export const noteListReducer = (
  state: Array<noteType> = initialState,
  action: NoteListAT
) => {
  switch (action.type) {
    case "ADD-NOTE":
      const newNote = {
        id: v1(),
        title: action.title,
        priority: "unimportant",
      };
      return [newNote, ...state];
    case "CHANGE-TITLE":
      return state.map((n) =>
        n.id === action.id ? { ...n, title: action.title } : n
      );
    case "REMOVE-NOTE":
      return state.filter((n) => n.id !== action.id);
    default:
      return state;
  }
};

//ACTION CREATOR
export const addNoteAC = (title: string) => {
  return {
    type: "ADD-NOTE",
    title: title,
  } as const;
};
export const changeTitleAC = (id: string, title: string) => {
  return {
    type: "CHANGE-TITLE",
    id,
    title,
  } as const;
};
export const removeNoteAC = (id: string) => {
  return { id: id, type: "REMOVE-NOTE" } as const;
};

//TYPE
type NoteListAT = AddNoteAT | ChangeTitleAT | RemoveNoteAT;
type AddNoteAT = ReturnType<typeof addNoteAC>;
type ChangeTitleAT = ReturnType<typeof changeTitleAC>;
type RemoveNoteAT = ReturnType<typeof removeNoteAC>;
