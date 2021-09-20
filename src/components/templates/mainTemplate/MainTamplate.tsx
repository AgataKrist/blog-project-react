import React from "react";
import s from "./MainTamplate.module.css";
import bacMain from "../../../assets/1.svg";
import { Header } from "../../moleculs/header/Header";

interface IMainTemplate {
  main: React.ReactNode;
}

export const MainTamplate = ({ main }: IMainTemplate) => {
  return (
    <div className={s.page}>
      <Header />
      <div className={s.wrapper}>{main}</div>
      <div className={s.background}>
        <img src={bacMain} alt="background" />
      </div>
    </div>
  );
};
