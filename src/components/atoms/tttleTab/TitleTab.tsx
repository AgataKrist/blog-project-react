import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./TitleTab.module.css";
import cn from "classnames";

interface ITitleTab {
  isActiveLogin?: boolean;
  isActiveRegistration?: boolean;
}

export const TitleTab = ({
  isActiveLogin,
  isActiveRegistration,
}: ITitleTab) => {
  const titlesDefault = [
    {
      title: "Login",
      to: "login",
      isActive: isActiveLogin,
    },
    {
      title: "Registration",
      to: "/registration",
      isActive: isActiveRegistration,
    },
  ];

  return (
    <div className={s.wrapper}>
      {titlesDefault.map(({ title, isActive, to }) => (
        <div className={s.item}>
          <Link to={to} className={s.link}>
            <h1 className={cn(s.title, { [s.active]: isActive })}>{title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};
