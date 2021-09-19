import React, { useCallback, useEffect } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input";
import { SignAbout } from "../../atoms/signAbout/SignAbout";
import ok from "../../../assets/ok.svg";
import show from "../../../assets/show.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAppState } from "../../../core/selectors/appSelectors";
import { validateEmail, validatePassword, validateName } from "../../../helper";
import {
  setIsValidMail,
  setIsValidPassword,
  setIsValidUser,
  setIsValidPasswordConfirm,
} from "../../../core";

export const RegForm = () => {
  const { isValidUser } = useSelector(getAppState);
  const { isValidMail } = useSelector(getAppState);
  const { isValidPassword } = useSelector(getAppState);
  const { isValidPasswordConfirm } = useSelector(getAppState);

  const dispatch = useDispatch();

  const setUser = useCallback(
    (value) => {
      if (validateName(value)) {
        dispatch(setIsValidUser(true));
        return;
      }
      dispatch(setIsValidUser(false));
    },
    [dispatch, isValidPassword]
  );
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
  const setPasswordConfirm = useCallback(
    (value) => {
      if (validatePassword(value)) {
        dispatch(setIsValidPasswordConfirm(true));
        return;
      }
      dispatch(setIsValidPasswordConfirm(false));
    },
    [dispatch, isValidPasswordConfirm]
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
      dispatch(setIsValidUser(false));
      dispatch(setIsValidPassword(false));
      dispatch(setIsValidPasswordConfirm(false));
    };
  }, [dispatch]);
  return (
    <>
      <div>
        <Input
          handlerSearchFilter={setUser}
          isValid={isValidUser}
          label={"User Name"}
          img={ok}
          type={"text"}
        />
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
        <Input
          handlerSearchFilter={setPasswordConfirm}
          isValid={isValidPasswordConfirm}
          label={"Confirm Password"}
          img={show}
          type={"password"}
        />
      </div>
      <Button
        disabled={
          isValidMail &&
          isValidPassword &&
          isValidUser &&
          isValidPasswordConfirm
            ? false
            : true
        }
        text={"Login"}
      />
      <SignAbout
        text={"If you have account, you can"}
        link={"Login"}
        to={"/login"}
      />
    </>
  );
};
