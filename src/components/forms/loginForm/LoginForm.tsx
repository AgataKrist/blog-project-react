import React, { useCallback, useEffect } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input";
import { SignAbout } from "../../atoms/signAbout/SignAbout";
import ok from "../../../assets/ok.svg";
import show from "../../../assets/show.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAppState } from "../../../core/selectors/appSelectors";
import { validateEmail, validatePassword } from "../../../helper";
import { setIsValidMail, setIsValidPassword } from "../../../core";

export const LoginForm = () => {
  const { isValidMail } = useSelector(getAppState);
  const { isValidPassword } = useSelector(getAppState);

  const dispatch = useDispatch();

  const setPassword = useCallback(
    (value) => {
      if (validatePassword(value)) {
        dispatch(setIsValidPassword(true));
        return;
      }
      dispatch(setIsValidPassword(false));
    },
    [dispatch, isValidPassword]
  );
  const setEmail = useCallback(
    (value) => {
      if (validateEmail(value)) {
        dispatch(setIsValidMail(true));
        return;
      }

      dispatch(setIsValidMail(false));
    },
    [dispatch, isValidMail]
  );

  useEffect(() => {
    return () => {
      dispatch(setIsValidMail(false));
      dispatch(setIsValidPassword(false));
    };
  }, [dispatch]);
  return (
    <>
      <div>
        <Input
          handlerSearchFilter={setEmail}
          isValid={isValidMail}
          label={"Email"}
          img={ok}
          type={"text"}
        />
        <Input
          handlerSearchFilter={setPassword}
          isValid={isValidPassword}
          label={"Password"}
          img={show}
          type={"password"}
        />
      </div>
      <Button
        disabled={isValidMail && isValidPassword ? false : true}
        text={"Login"}
      />
      <SignAbout
        text={"Forgot your password?"}
        link={"Reset Password"}
        to={"/reset"}
      />
    </>
  );
};
