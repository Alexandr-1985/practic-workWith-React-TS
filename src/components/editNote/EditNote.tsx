import { TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

type EditNoteType = {
  title: string;
  changeTitle: (id: string, title: string) => void;
  id: string;
};

const EditNote = (props: EditNoteType) => {
  const [editNote, setEditNote] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.title);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    setEditNote(!editNote);
  };
  const onBlurHandler = () => {
    if (value) {
      setEditNote(!editNote);
      props.changeTitle(props.id, value);
    } else {
      setValue(props.title);
      setEditNote(!editNote);
    }
  };
  const onClickChangeTitleHandler = () => {
    setEditNote(!editNote);
    props.changeTitle(props.id, value);
  };
  return (
    <div>
      {editNote ? (
        <TextField
          autoFocus
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          value={value}
          type="text"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      ) : (
        <span onDoubleClick={onClickHandler}>{props.title}</span>
      )}
      <button onClick={onClickChangeTitleHandler}>Edit</button>
    </div>
  );
};

export default EditNote;
