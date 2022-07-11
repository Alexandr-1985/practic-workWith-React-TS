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
    setEditNote(!EditNote);
  };
  const onBlurHandler = () => {
    if (value) {
      setEditNote(!EditNote);
      props.changeTitle(props.id, value);
    } else {
      setValue(props.title);
      setEditNote(!EditNote);
    }
  };
  const onClickChangeTitleHandler = () => {
    setEditNote(!editNote);
    props.changeTitle(props.id, value);
  };
  return (
    <div>
      {editNote ? (
        <input
          autoFocus
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          value={value}
          type="text"
        />
      ) : (
        <span onDoubleClick={onClickHandler}>{props.title}</span>
      )}
      <button onClick={onClickChangeTitleHandler}>Edit</button>
    </div>
  );
};

export default EditNote;
