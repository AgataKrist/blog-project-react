import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import ok from "../../assets/ok.svg";
import { Input } from "../atoms/input";
import { SignAbout } from "../atoms/signAbout/SignAbout";

export const ResetPassword = () => {
  const description = (mb: string) => {
    return (
      <div style={{ marginBottom: mb, textAlign: "center" }}>
        <p className={s.text}>
          Please enter the email <br /> for your account
        </p>
      </div>
    );
  };
  return (
    <div>
      <SignTemplate
        main={
          <>
            <Title title={"Reset password"} />
            {description("20px")}
            <Input label={"Email"} img={ok} type={"text"} />
            <Button text={"Login"} />
            <SignAbout text={"Return to "} link={"Login"} to={"/login"} />
          </>
        }
      />
    </div>
  );
};
