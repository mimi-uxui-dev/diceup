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
    <div className={`  ${classname}`}>
      {label && <label className="text-white"> mm {label}</label>}
      <input
        className="flex w-80 p-3 items-center border border-solid border-purpleLinear focus:border-purple-300 bg-transparent text-white rounded-md"
        type={type}
        value={value}
        // onChange={handleChange}
        placeholder={placeholder}
        readOnly
      />
    </div>
  );
};

export default Input;
