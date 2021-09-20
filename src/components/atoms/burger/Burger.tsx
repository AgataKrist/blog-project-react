import React from "react";
import s from "./Burger.module.css";
import cn from "classnames";

interface IBurger {
  onClick: () => void;
}

export const Burger = ({ onClick }: IBurger) => {
  return (
    <div onClick={onClick} className={s.wrapper}>
      <div className={cn(s.line, s.line1)}></div>
      <div className={cn(s.line, s.line2)}></div>
      <div className={cn(s.line, s.line3)}></div>
    </div>
  );
};
