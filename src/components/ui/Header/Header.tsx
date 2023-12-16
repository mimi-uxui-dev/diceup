"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./style.css";
import logo from "../../../../public/logo.svg";
import menu from "../../../../public/menu.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <header>
      <Image
        className="logoHeader"
        src={logo}
        width={108.21}
        height={34.5}
        alt={`Dice Up logo`}
      />
      <div className="menu flex justifyCenter alignCenter gap20">
        <a className="buttonText" href="/">
          Home
        </a>
        <a className="buttonText" href="/">
          Browse
        </a>
        <a className="buttonText" href="/">
          Shop
        </a>
        <a className="buttonText smallButton" href="/">
          Stream Now
        </a>
      </div>
      {/* Mobile Menu - Start - */}
      <span className="menuMobile" onClick={toggleOpen}>
        <Image
          className="menuIcon"
          width={30}
          height={30}
          src={menu}
          alt={`Dice Up logo`}
        />
      </span>
      <div
        className={`menuMobileContent flex justifyCenter alignCenter gap20 ${
          open ? "open" : ""
        }`}
      >
        <span className="closeHeaderMenu" onClick={toggleOpen}>
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
        <a className="buttonText smallButton" href="/">
          Stream Now
        </a>
      </div>
      {/* Mobile Menu - End - */}
    </header>
  );
};

export default Header;
