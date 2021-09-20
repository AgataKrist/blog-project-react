import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input";
import { SignAbout } from "../../atoms/signAbout/SignAbout";
import ok from "../../../assets/ok.svg";
import show from "../../../assets/show.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState } from "../../../core/selectors/appSelectors";
import { validateEmail, validatePassword } from "../../../helper";
import { setMailLogin, setPasswordLogin } from "../../../core";

export const LoginForm = () => {
  const [typePass, setTypePass] = useState("password");

  const { mail, password } = useSelector(getLoginState);

  const isMail = validateEmail(mail);
  const isPassword = validatePassword(password);

  const dispatch = useDispatch();

  const handleSetPassword = useCallback(
    (value: string) => {
      dispatch(setPasswordLogin(value));
    },
    [dispatch, password]
  );
  const handleSetMail = useCallback(
    (value: string) => {
      dispatch(setMailLogin(value));
    },
    [dispatch, mail]
  );

  useEffect(() => {
    return () => {
      dispatch(setPasswordLogin(""));
      dispatch(setMailLogin(""));
    };
  }, [dispatch]);

  const handleShowPass = (type: string) => {
    if (type === "password") {
      setTypePass("text");
    }
    if (type === "text") {
      setTypePass("password");
    }
  };
  return (
    <>
      <div>
        <Input
          value={mail}
          onChange={handleSetMail}
          isValid={isMail}
          label={"Email"}
          img={ok}
          type={"text"}
        />
        <Input
          value={password}
          handleShowPass={handleShowPass}
          onChange={handleSetPassword}
          isValid={isPassword}
          label={"Password"}
          img={show}
          type={typePass}
        />
      </div>
      <Button disabled={!(isMail && isPassword)} text={"Login"} />
      <SignAbout
        text={"Forgot your password?"}
        link={"Reset Password"}
        to={"/reset"}
      />
    </>
  );
};
