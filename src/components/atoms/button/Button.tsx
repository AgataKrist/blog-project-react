import React from "react";
import s from "./Button.module.css";

interface IButton {
  text: string;
}
export const Button = ({ text }: IButton) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button}>{text}</button>
    </div>
  );
};
