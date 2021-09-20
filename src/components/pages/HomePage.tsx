import React from "react";
import { Input } from "../atoms/input";
import ok from "../../assets/ok.svg";
import show from "../../assets/show.svg";
import { Button } from "../atoms/button/Button";
import { SignAbout } from "../atoms/signAbout/SignAbout";
import { Title } from "../atoms/title";
import { MainTamplate } from "./../templates/mainTemplate/MainTamplate";

export const HomePage = () => {
  return (
    <div>
      <MainTamplate
        main={
          <>
            <h1>
              Make your <br /> Blog <span>Online</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the ...
            </p>
            <Button text={"Learn More"} />
          </>
        }
      />
    </div>
  );
};
