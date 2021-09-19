import React, { useCallback, useEffect } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input";
import { SignAbout } from "../../atoms/signAbout/SignAbout";
import ok from "../../../assets/ok.svg";
import show from "../../../assets/show.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLoginState } from "../../../core/selectors/appSelectors";
import { validateEmail, validatePassword } from "../../../helper";
import { setMail } from "../../../core";
import { setPassword } from "../../../core";

export const LoginForm = () => {
  const { mail, password } = useSelector(getLoginState);

  const isMail = validateEmail(mail);
  const isPassword = validatePassword(password);

  const dispatch = useDispatch();

  const handleSetPassword = useCallback(
    (value) => {
      dispatch(setPassword(value));
    },
    [dispatch, password]
  );
  const handleSetMail = useCallback(
    (value) => {
      dispatch(setMail(value));
    },
    [dispatch, mail]
  );

  useEffect(() => {
    return () => {
      dispatch(setPassword(""));
      dispatch(setMail(""));
    };
  }, [dispatch]);
  return (
    <>
      <div>
        <Input
          handlerSearchFilter={handleSetMail}
          isValid={isMail}
          label={"Email"}
          img={ok}
          type={"text"}
        />
        <Input
          handlerSearchFilter={handleSetPassword}
          isValid={isPassword}
          label={"Password"}
          img={show}
          type={"password"}
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
