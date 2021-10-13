import React from "react";
import s from "./Textarea.module.css";
import cn from "classnames";

interface ITextarea {
	onChange?: any;
	isValid?: boolean;
	label?: string;
	img?: string;
	type?: string;
	handleShowPass?: any;
	value?: string;
	error?: string | null;
	isShowImg?: boolean;
}

export const Textarea = ({
	label,
	img,
	type,
	isValid,
	onChange,
	handleShowPass,
	value,
	error,
	isShowImg,
}: ITextarea) => {
	return (
		<div className={s.wrapper}>
			<label className={s.label}>{label}</label>
			<span>{isValid}</span>
			<textarea
				value={value}
				onChange={(e: any) => onChange(e.target.value)}
				className={cn(s.input, { [s.invalid]: !isValid })}
			/>
		</div>
	);
};
