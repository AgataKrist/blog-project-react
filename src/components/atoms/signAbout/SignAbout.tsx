import React from "react";
import s from "./SignAbout.module.css";
import cn from "classnames";

interface ISignAbout {
  text: string;
  to: string;
}

export const SignAbout = ({ text, to }: ISignAbout) => {
  return (
    <div>
      <span className={s.text}>{text}</span>
      <a className={s.link} href="/">
        <span className={cn(s.text)}>{to}</span>
      </a>
    </div>
  );
};
