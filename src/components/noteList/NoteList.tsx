import React from "react";
// import { noteType } from "../../App";
import EditNote from "../editNote/EditNote";
import AddItem from "../addItem/AddItem";
import { noteType } from "../../bll/noteListReducer";

type NoteListType = {
  notes: Array<noteType>;
  addNote: (title: string) => void;
  removeNote: (id: string) => void;
  changeTitle: (id: string, title: string) => void;
};
const NoteList = (props: NoteListType) => {
  //console.log(props.notes[0].id);

  const onClickHandler = (id: string) => {
    props.removeNote(id);
  };

  return (
    <div>
      <AddItem addItem={props.addNote} />
      {props.notes.map((n) => {
        return (
          <div key={n.id} className={"note"}>
            <EditNote
              id={n.id}
              changeTitle={props.changeTitle}
              title={n.title}
            />
            <button onClick={() => onClickHandler(n.id)}>Del</button>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
