import React from "react";
import s from "./Title.module.css";
interface ITitle {
	title: string;
}

export const Title = ({ title }: ITitle) => {
	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>{title}</h1>
		</div>
	);
};
