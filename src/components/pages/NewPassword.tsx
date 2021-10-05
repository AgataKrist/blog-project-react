import React from "react";
import { SignTemplate } from "../templates/signTemplate";
import { Button } from "../atoms/button/Button";
import { Title } from "./../atoms/title/Title";
import s from "../atoms/signAbout/SignAbout.module.css";
import ok from "../../assets/ok.svg";
import { Input } from "../atoms/input";
import { SignAbout } from "../atoms/signAbout/SignAbout";

export const NewPassword = () => {
	const description = (mb: string) => {
		return (
			<div style={{ marginBottom: mb }}>
				<p className={s.text}>Please enter new password</p>
			</div>
		);
	};
	return (
		<div>
			<SignTemplate
				title={<Title title={"New password"} />}
				main={
					<>
						{description("20px")}
						<Input
							label={"New Password"}
							img={ok}
							type={"password"}
						/>
						<Input
							label={"Confirm password"}
							img={ok}
							type={"password"}
						/>
						<Button text={"Set password"} />
						<SignAbout text={"Return to "} to={"Login"} />
					</>
				}
			/>
		</div>
	);
};
