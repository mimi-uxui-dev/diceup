import { variants } from "classname-variants";
import React from "react";

interface ButtonProps {
  colorVariant: "brand" | "accent";
  sizeVariant: "small" | "large" | "medium";
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  colorVariant,
  sizeVariant,
  children,
}) => {
  const buttonClasses = variants({
    base: "flex items-center justify-center rounded-full font-Inter font-bold rounded text-white shadow-xl hover:shadow-purpleButtonShadow transition-all",
    variants: {
      color: {
        brand: "bg-purple-600 border border-purple-600 hover:bg-purple-500",
        accent:
          "bg-transparent border border-emerald-600 hover:bg-purple-700 hover:border-purple-600",
      },
      size: {
        small: "px-4 py-2 text-sm min-w-24 h-10",
        medium: "px-6 py-4 text-base min-w-28 h-12",
        large: "px-7 py-5 text-lg min-w-32 h-14",
      },
    },
  });

  const buttonVariantClasses = buttonClasses({
    color: colorVariant,
    size: sizeVariant,
  });

  return <button className={buttonVariantClasses}>{children}</button>;
};

export default Button;
