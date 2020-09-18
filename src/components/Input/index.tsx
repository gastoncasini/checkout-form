import React from "react";

interface InputProps {
  handleChange: any;
  value: string;
  name: string;
}

function Input({ handleChange, value, name }: InputProps): JSX.Element {
  return (
    <input
      type="text"
      value={value}
      name={name}
      onChange={handleChange}
    ></input>
  );
}

export default Input;
