import React from "react";
import s from "./Input.module.css";
import cn from "classnames";

interface IInput {
	onChange?: any;
	isValid?: boolean;
	label: string;
	img: string;
	type: string;
	handleShowPass?: any;
	value?: string;
	error?: string | null;
	isShowImg?: boolean;
}

export const Input = ({
	label,
	img,
	type,
	isValid,
	onChange,
	handleShowPass,
	value,
	error,
	isShowImg,
}: IInput) => {
	return (
		<div className={s.wrapper}>
			<label className={s.label}>{label}</label>
			<span>{isValid}</span>
			<input
				value={value}
				onChange={(e: any) => onChange(e.target.value)}
				className={cn(s.input, { [s.invalid]: !isValid })}
				type={type}
			/>
			<span>{error}</span>
			<span
				onClick={() =>
					(label === "Password" || label === "Confirm Password") &&
					handleShowPass(type)
				}
				className={cn(s.icon, {
					[s.show]: isShowImg,
					[s.cursorPointer]:
						label === "Password" || label === "Confirm Password",
				})}
			>
				<img src={img} alt="ok" />
			</span>
		</div>
	);
};
