import React from "react";
import s from "./Button.module.css";
import cn from "classnames";

interface IButton {
	text: string;
	disabled?: boolean;
	sendData?: () => void;
}
export const Button = ({ text, disabled, sendData }: IButton) => {
	return (
		<div className={s.wrapper}>
			<button
				disabled={disabled}
				onClick={sendData}
				className={cn(s.button, { [s.disabled]: disabled })}
			>
				{text}
			</button>
		</div>
	);
};
