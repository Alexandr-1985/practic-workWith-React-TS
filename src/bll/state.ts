import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { noteListReducer } from "./noteListReducer";

export type AppRootState = ReturnType<typeof rootReducers>;

const rootReducers = combineReducers({
  noteList: noteListReducer,
});

export const store = createStore(rootReducers);

//@ts-ignore
window.store = store;
