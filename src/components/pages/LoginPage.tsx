import React from "react";
import { Input } from "../atoms/input";
import { SignTemplate } from "../templates/signTemplate";
import { TitleTab } from "./../atoms/tttleTab/TitleTab";
import ok from "../../assets/ok.svg";
import show from "../../assets/show.svg";
import { Button } from "../atoms/button/Button";
import { SignAbout } from "../atoms/signAbout/SignAbout";

export const LoginPage = () => {
  return (
    <div>
      <SignTemplate
        main={
          <>
            <TitleTab />
            <div>
              <Input label={"Email"} img={ok} type={"text"} />
              <Input label={"Password"} img={show} type={"password"} />
            </div>
            <Button text={"Login"} />
            <SignAbout text={"Forgot your password?"} to={"Reset password"} />
          </>
        }
      />
    </div>
  );
};
