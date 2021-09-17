import React from "react";
import { Input } from "../atoms/input";
import { SignTemplate } from "../templates/signTemplate";
import { TitleTab } from "./../atoms/tttleTab/TitleTab";
import ok from "../../assets/ok.svg";
import show from "../../assets/show.svg";
import { Button } from "../atoms/button/Button";
import { SignAbout } from "../atoms/signAbout/SignAbout";

export const RegistrationPage = () => {
  return (
    <div>
      <SignTemplate
        main={
          <>
            <TitleTab />
            <div>
              <Input label={"User Name"} img={ok} type={"text"} />
              <Input label={"Email"} img={ok} type={"text"} />
              <Input label={"Password"} img={show} type={"password"} />
              <Input label={"Confirm Password"} img={show} type={"password"} />
            </div>
            <Button text={"Login"} />
            <SignAbout text={"If you have account, you can "} to={"Login"} />
          </>
        }
      />
    </div>
  );
};
