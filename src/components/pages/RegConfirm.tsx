import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";

export const RegConfirm = () => {
  const description = (mb: string) => {
    return (
      <div style={{ marginBottom: mb }}>
        <p className={s.text}>Please activate your account with </p>
        <p className={s.text}>
          the activation link in the email
          <a className={s.link} href="/">
            test@gmail.com
          </a>
        </p>
        <p className={s.text}>Please, check your email</p>
      </div>
    );
  };
  return (
    <div>
      <SignTemplate
        main={
          <>
            <Title title={"Registartion Confirmation"} />
            {description("20px")}
            <Button text={"Home"} />
          </>
        }
      />
    </div>
  );
};
