import React, { useCallback, useEffect } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input";
import { SignAbout } from "../../atoms/signAbout/SignAbout";
import ok from "../../../assets/ok.svg";
import show from "../../../assets/show.svg";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationState } from "../../../core/selectors/appSelectors";
import { validateEmail, validatePassword, validateName } from "../../../helper";
import { setUser, setMail } from "../../../core";
import { setPassword } from "../../../core/actions/loginActions";
import { setPasswordConfirm } from "./../../../core/actions/regActions";

export const RegForm = () => {
  const { user, mail, passwordConfirm, password } =
    useSelector(getRegistrationState);

  const isUser = validateName(user);
  const isMail = validateEmail(mail);
  const isPassword = validatePassword(password);
  const isPasswordConfirm = () => {
    return !!(
      validatePassword(passwordConfirm) && passwordConfirm === password
    );
  };

  const dispatch = useDispatch();

  const handlerSetUser = useCallback(
    (value) => {
      dispatch(setUser(value));
    },
    [dispatch, user]
  );

  const handlerSetPassword = useCallback(
    (value) => {
      dispatch(setPassword(value));
    },
    [dispatch, password]
  );

  const handlerSetPasswordConfirm = useCallback(
    (value) => {
      dispatch(setPasswordConfirm(value));
    },
    [dispatch, passwordConfirm]
  );
  const handlerSetEmail = useCallback(
    (value) => {
      dispatch(setMail(value));
    },
    [dispatch, mail]
  );

  useEffect(() => {
    return () => {
      dispatch(setUser(""));
      dispatch(setMail(""));
      dispatch(setPassword(""));
      dispatch(setPasswordConfirm(""));
    };
  }, [dispatch]);
  return (
    <>
      <div>
        <Input
          handlerSearchFilter={handlerSetUser}
          isValid={isUser}
          label={"User Name"}
          img={ok}
          type={"text"}
        />
        <Input
          handlerSearchFilter={handlerSetEmail}
          isValid={isMail}
          label={"Email"}
          img={ok}
          type={"text"}
        />
        <Input
          handlerSearchFilter={handlerSetPassword}
          isValid={isPassword}
          label={"Password"}
          img={show}
          type={"password"}
        />
        <Input
          handlerSearchFilter={handlerSetPasswordConfirm}
          isValid={isPasswordConfirm()}
          label={"Confirm Password"}
          img={show}
          type={"password"}
        />
      </div>
      <Button
        disabled={!(isUser && isMail && isPasswordConfirm() && isPassword)}
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
