import React from "react";

interface InputProps {
  handleChange: any;
  value: string;
  name: string;
  placeholder: string;
  widthClass?: string;
  marginClass?: string;
}

function Input(props: InputProps): JSX.Element {
  const {
    handleChange,
    value,
    name,
    widthClass,
    marginClass,
    placeholder,
  } = props;
  const baseClasses =
    "bg-gray-300 border  focus:border-blue-500 rounded-md text-xs  pl-1";
  const classes = `${baseClasses} ${widthClass} ${marginClass}`;

  return (
    <input
      className={classes}
      type="text"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
}

export default Input;
