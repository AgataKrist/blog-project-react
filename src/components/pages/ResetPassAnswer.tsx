import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";

export const ResetPasswordAnswer = () => {
  const description = (mb: string) => {
    return (
      <div style={{ marginBottom: mb }}>
        <p className={s.text}>
          You will receive an email
          <a className={s.link} href="/">
            test@gmail.com
          </a>
        </p>
        <p className={s.text}>with a link to reset your password</p>
      </div>
    );
  };
  return (
    <div>
      <SignTemplate
        main={
          <>
            <Title title={"Reset Password"} />
            {description("20px")}
            <Button text={"Home"} />
          </>
        }
      />
    </div>
  );
};
