import React, { ChangeEvent, FC } from "react";
import "./style.css";

interface InputProps {
  label?: string;
  value: string;
  // onChange: (value: string) => void;
  placeholder?: string;
  type: string;
  classname: string;
}

const Input: FC<InputProps> = ({
  label,
  value,
  // onChange,
  placeholder,
  type,
  classname,
}) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value);
  // };

  return (
    <div className={`inputContainer ${classname}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        // onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
