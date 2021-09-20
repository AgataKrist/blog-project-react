import React from "react";
import s from "./Input.module.css";
import cn from "classnames";

interface IInput {
  onChange?: any;
  isValid?: boolean;
  label: string;
  img: string;
  type: string;
  handleShowPass?: any;
  value?: string;
}

export const Input = ({
  label,
  img,
  type,
  isValid,
  onChange,
  handleShowPass,
  value,
}: IInput) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>{label}</label>
      <input
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        className={cn(s.input, { [s.invalid]: !isValid })}
        type={type}
      />
      <span
        onClick={() => handleShowPass(type)}
        className={cn(s.icon, { [s.show]: isValid })}
      >
        <img src={img} alt="ok" />
      </span>
    </div>
  );
};
