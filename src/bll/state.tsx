import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { noteListReducer } from "./noteListReducer";

const rootReducers = combineReducers({
  noteList: noteListReducer,
});

export const store = createStore(rootReducers);
export type AppRootState = ReturnType<typeof rootReducers>;

//@ts-ignore
window.store = store;
