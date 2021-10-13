import React from "react";
import s from "./SignTemplate.module.css";
import { Header } from "../../moleculs/header/Header";
import background from "../../../assets/background.svg";
import { setIsOpenHeaderAction } from "../../../core";
import { useDispatch } from "react-redux";

interface ISignTemplate {
	main: React.ReactNode;
	title?: React.ReactNode;
	isActiveLogin?: boolean;
	isActiveRegistration?: boolean;
}

export const SignTemplate = ({ main, title }: ISignTemplate) => {
	const dispatch = useDispatch();

	return (
		<div
			onClick={() => dispatch(setIsOpenHeaderAction(false))}
			className={s.page}
		>
			<Header />
			{title}
			<div className={s.wrapper}>{main}</div>
			<div className={s.background}>
				<img src={background} alt="background" />
			</div>
		</div>
	);
};
