import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { TitleTab } from "./../atoms/tttleTab/TitleTab";
import { LoginForm } from "../forms/loginForm/LoginForm";

export const LoginPage = () => {
	return (
		<div>
			<SignTemplate
				title={
					<TitleTab
						isActiveLogin={true}
						isActiveRegistration={false}
					/>
				}
				isActiveLogin={true}
				isActiveRegistration={false}
				main={<LoginForm />}
			/>
		</div>
	);
};
