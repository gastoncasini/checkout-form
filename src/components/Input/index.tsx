import React from "react";

interface InputProps {
  handleChange: any;
  value: string;
  name: string;
  widthClass?: string;
  marginClass?: string;
}

function Input(props: InputProps): JSX.Element {
  const { handleChange, value, name, widthClass, marginClass } = props;
  const baseClasses = "bg-gray-300 border  focus:border-blue-500 rounded-md ";
  const classes = `${baseClasses} ${widthClass} ${marginClass}`;

  return (
    <input
      className={classes}
      type="text"
      value={value}
      name={name}
      onChange={handleChange}
    ></input>
  );
}

export default Input;
