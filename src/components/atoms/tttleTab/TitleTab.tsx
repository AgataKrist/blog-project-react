import React from "react";
import s from "./TitleTab.module.css";
import cn from "classnames";

export const TitleTab = () => {
  const titles = [
    {
      title: "Login",
      isActive: true,
    },
    {
      title: "Registration",
      isActive: false,
    },
  ];
  return (
    <div className={s.wrapper}>
      {titles.map(({ title, isActive }) => (
        <div className={s.item}>
          <a className={s.link} href="/">
            <h1 className={cn(s.title, { [s.active]: isActive })}>{title}</h1>
          </a>
        </div>
      ))}
    </div>
  );
};
