import React from "react";
import s from "./Burger.module.css";
import cn from "classnames";

export const Burger = () => {
  return (
    <div className={s.wrapper}>
      <div className={cn(s.line, s.line1)}></div>
      <div className={cn(s.line, s.line2)}></div>
      <div className={cn(s.line, s.line3)}></div>
    </div>
  );
};
