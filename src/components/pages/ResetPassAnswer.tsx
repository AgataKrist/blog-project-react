import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import { useSelector } from "react-redux";
import { getResetPasswordState } from "../../core/selectors/appSelectors";
import { useHistory } from "react-router-dom";

export const ResetPasswordAnswer = () => {
  const { mailReset } = useSelector(getResetPasswordState);
  const history = useHistory();

  const handleHistory = () => {
    history.push("/");
  };
  const description = (mb: string) => {
    return (
      <div style={{ marginBottom: mb, textAlign: "center" }}>
        <p className={s.text}>
          You will receive an email
          <a href={`mailto:${mailReset}`} className={s.link}>
            {mailReset}
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
            <Button handleHistory={handleHistory} text={"Home"} />
          </>
        }
      />
    </div>
  );
};
