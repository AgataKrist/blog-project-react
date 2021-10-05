import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { TitleTab } from "./../atoms/tttleTab/TitleTab";
import { RegistrationForm } from "../forms/registrationForm/RegistrationForm";

export const RegistrationPage = () => {
	return (
		<div>
			<SignTemplate
				title={
					<TitleTab
						isActiveLogin={false}
						isActiveRegistration={true}
					/>
				}
				isActiveLogin={false}
				isActiveRegistration={true}
				main={<RegistrationForm />}
			/>
		</div>
	);
};
