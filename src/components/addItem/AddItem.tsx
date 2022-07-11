import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import s from "./AddItem.module.css";

type AddItemType = {
  addItem: (title: string) => void;
};

const AddItem = (props: AddItemType) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
    if (error) {
      setError("");
    }
  };
  const onClickHandler = () => {
    if (value.trim()) {
      //(value !== ' ')
      props.addItem(value);
      setValue(" ");
    } else {
      setError("Value must be not empty");
    }
  };
  return (
    <div>
      <input
        className={error ? s.error : ""}
        onKeyPress={onKeyPressHandler}
        onChange={onChangeHandler}
        value={value}
        type="text"
      />
      <button
        disabled={!value}
        className={error ? s.error : ""}
        onClick={onClickHandler}
      >
        +
      </button>
      <p>{error}</p>
    </div>
  );
};

export default AddItem;
