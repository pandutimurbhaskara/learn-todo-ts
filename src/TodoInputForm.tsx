import React, { useState } from "react";


interface Props {
    toggleAdd: ToggleAdd;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>
  }


export const TodoInputForm: React.FC<Props> = ({toggleAdd, input, setInput}) => {
  return (
    <form>
      <input type="text" onChange={event => setInput(event.target.value)} />
      <button type="submit" onClick={(event) => {
        event.preventDefault();
        toggleAdd(input)
      }}
        >Add Todo</button>
    </form>
  );
};