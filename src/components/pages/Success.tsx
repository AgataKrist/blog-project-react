import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";

interface ISuccess {
  text: string;
}

export const Success = ({ text }: ISuccess) => {
  const description = (mb: string) => {
    return (
      <div style={{ marginBottom: mb }}>
        <p className={s.text}>{text}</p>
      </div>
    );
  };
  return (
    <div>
      <SignTemplate
        main={
          <>
            <Title title={"Success"} />
            {description("20px")}
            <Button text={"Login"} />
          </>
        }
      />
    </div>
  );
};
