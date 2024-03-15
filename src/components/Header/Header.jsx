import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_item}>
        <a href="">Home</a>
        <a href="">Page</a>
        <a href="">About</a>
      </div>
    </header>
  );
};

export default Header;
