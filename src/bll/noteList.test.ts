import { removeNoteAC } from "./noteListReducer";
import {
  noteListReducer,
  addNoteAC,
  noteType,
  changeTitleAC,
} from "./noteListReducer";

let startState: Array<noteType> = [
  { id: "1", title: "Learn HTML", priority: "important" },
  { id: "2", title: "Learn JS", priority: "unimportant" },
];

test("add new note in noteList", () => {
  let endState = noteListReducer(startState, addNoteAC("Learn React"));
  expect(endState.length).toBe(3);
  expect(endState[0].title).toBe("Learn React");
});

test("change title", () => {
  let endState = noteListReducer(
    startState,
    changeTitleAC("1", "Learn React + Learn Java")
  );
  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe("Learn React  + Learn Node.js");
});

test("remove note", () => {
  let endState = noteListReducer(startState, removeNoteAC("1"));
  expect(endState.length).toBe(3);
});
