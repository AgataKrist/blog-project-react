import React from "react";
import { Link } from "react-router-dom";
import s from "./SignAbout.module.css";
import cn from "classnames";

interface ISignAbout {
  text: string;
  to: string;
  link?: string;
}

export const SignAbout = ({ text, to, link }: ISignAbout) => {
  return (
    <div>
      <span className={s.text}>{text}</span>
      <Link to={to} className={s.link}>
        <span className={cn(s.text)}>{link}</span>
      </Link>
    </div>
  );
};
