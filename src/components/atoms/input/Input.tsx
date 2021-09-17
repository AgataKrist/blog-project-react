import React from "react";
import s from "./Input.module.css";

interface IInput {
  label: string;
  img: string;
  type: string;
}

export const Input = ({ label, img, type }: IInput) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>{label}</label>
      <input className={s.input} type={type} />
      <span className={s.icon}>
        <img src={img} alt="ok" />
      </span>
    </div>
  );
};
