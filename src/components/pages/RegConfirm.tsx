import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { useSelector } from "react-redux";
import { getRegistrationState } from "./../../core/selectors/appSelectors";

export const RegConfirm = () => {
  const { mail } = useSelector(getRegistrationState);

  const description = (mb: string) => {
    return (
      <div style={{ marginBottom: mb, textAlign: "center", width: "100%" }}>
        <p className={s.text}>
          Please activate your account with <br /> the activation link in the
          email
          <a href={`mailto:${mail}`} className={s.link}>
            {mail}
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
