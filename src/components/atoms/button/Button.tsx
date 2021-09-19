import React from "react";
import s from "./Button.module.css";
import cn from "classnames";

interface IButton {
  text: string;
  disabled?: boolean;
}
export const Button = ({ text, disabled }: IButton) => {
  return (
    <div className={s.wrapper}>
      <button className={cn(s.button, { [s.disabled]: disabled })}>
        {text}
      </button>
    </div>
  );
};
