import React from "react";
import "./styles.css";
import { inter } from "../../../fonts";

interface TagProps {
  label: string;
  className?: string;
}

function Tag({ label, className }: TagProps) {
  return <div className={`tag h5 ${className}`}>{label}</div>;
}
export default Tag;
