import React from "react";
import { Input } from "../atoms/input";
import { SignTemplate } from "../templates/signTemplate";
import ok from "../../assets/ok.svg";
import show from "../../assets/show.svg";
import { Button } from "../atoms/button/Button";
import { SignAbout } from "../atoms/signAbout/SignAbout";
import { TitleTab } from "./../atoms/tttleTab/TitleTab";
import { RegForm } from "../forms/regForm/RegForm";

export const RegistrationPage = () => {
  return (
    <div>
      <SignTemplate
        title={<TitleTab isActiveLogin={false} isActiveRegistration={true} />}
        isActiveLogin={false}
        isActiveRegistration={true}
        main={<RegForm />}
      />
    </div>
  );
};
