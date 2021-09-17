import React from "react";
import s from "./SignTemplate.module.css";
import { Header } from "../../moleculs/header/Header";
import background from "../../../assets/background.svg";

interface ISignTemplate {
  main: React.ReactNode;
}

export const SignTemplate = ({ main }: ISignTemplate) => {
  return (
    <div>
      <Header />
      <div className={s.wrapper}>{main}</div>
      <div className={s.background}>
        <img src={background} alt="background" />
      </div>
    </div>
  );
};
