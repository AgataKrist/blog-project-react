import React from "react";
import s from "./Button.module.css";
import cn from "classnames";

interface IButton {
	text: string;
	disabled?: boolean;
	handleHistory?: () => void;
}
export const Button = ({ text, disabled, handleHistory }: IButton) => {
	return (
		<div className={s.wrapper}>
			<button
				disabled={disabled}
				onClick={handleHistory}
				className={cn(s.button, { [s.disabled]: disabled })}
			>
				{text}
			</button>
		</div>
	);
};
