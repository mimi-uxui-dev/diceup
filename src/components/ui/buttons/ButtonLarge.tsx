import React from "react";
import "./styles.css";

interface ButtonLargeProps {
  outline?: boolean;
  text?: string;
  disable: false;
  linkURL: string;
}

export const ButtonLarge: React.FC<ButtonLargeProps> = ({
  outline = false,
  text = "JOIN NOW!",
  disable = false,
  linkURL = "#",
}: ButtonLargeProps) => (
  <a
    href={linkURL}
    className={`button-large ${outline ? "outline" : ""} ${
      disable ? "disable" : ""
    }  `}
  >
    {text}
  </a>
);
