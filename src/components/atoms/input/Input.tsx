import React from "react";
import s from "./Input.module.css";
import cn from "classnames";

interface IInput {
  handlerSearchFilter?: any;
  isValid?: boolean;
  label: string;
  img: string;
  type: string;
}

export const Input = ({
  label,
  img,
  type,
  isValid,
  handlerSearchFilter,
}: IInput) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>{label}</label>
      <input
        onChange={(e) => handlerSearchFilter(e.target.value)}
        className={cn(s.input, { [s.invalid]: !isValid })}
        type={type}
      />
      <span className={s.icon}>
        <img src={img} alt="ok" />
      </span>
    </div>
  );
};
