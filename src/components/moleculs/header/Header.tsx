import React from "react";
import s from "./Header.module.css";
import { Burger } from "../../atoms/burger";

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <Burger />
    </div>
  );
};
