"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./style.css";
import logo from "../../../../public/logo.svg";
import menu from "../../../../public/menu.svg";
import Button from "../buttons/Button";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <header className="text-center z-10 h-20 sm:h-auto w-full text-white fixed flex justify-center">
      <div className="rounded-md bg-topnavbarBgColor backdrop-blur-md flex justify-between flex-row w-full max-w-screen-2xl px-8 py-3 mt-0 sm:mt-8 sm:mx-4 mx-0 ">
        <Image src={logo} width={108.21} height={34.5} alt={`Dice Up logo`} />
        <div className="menu hidden sm:flex justify-center items-center gap-5">
          <a className="buttonText" href="/">
            Home
          </a>
          <a className="buttonText" href="/">
            Browse
          </a>
          <a className="buttonText" href="/">
            Shop
          </a>
          <Button colorVariant={"accent"} sizeVariant={"large"}>
            Streaming Now
          </Button>
        </div>
        {/* Mobile Menu - Start - */}
        <span className="flex sm:hidden" onClick={toggleOpen}>
          <Image width={30} height={30} src={menu} alt={`Dice Up logo`} />
        </span>
        {/* Mobile Menu - End - */}
      </div>
      <div
        className={`flex flex-col absolute top-0 left-0 bg-topnavbarBgColor backdrop-blur-lg w-full h-screen justify-center items-center transition-all gap-5  ${
          open ? "flex " : "hidden"
        }`}
      >
        <span
          className="absolute top-4 right-4 text-white font-BebasNeue text-3xl leading-normal tracking-wide"
          onClick={toggleOpen}
        >
          X
        </span>
        <a className="buttonText" href="/">
          Home
        </a>
        <a className="buttonText" href="/">
          Browse
        </a>
        <a className="buttonText" href="/">
          Shop
        </a>
        <Button colorVariant={"accent"} sizeVariant={"large"}>
          Streaming Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
