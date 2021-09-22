import React from "react";
import s from "./MainTamplate.module.css";
import cn from "classnames";
import bacMain from "../../../assets/1.svg";
import { Header } from "../../moleculs/header/Header";
import { useSelector } from "react-redux";
import { getAppState } from "../../../core/selectors/appSelectors";

interface IMainTemplate {
	main: React.ReactNode;
}

export const MainTamplate = ({ main }: IMainTemplate) => {
	const { isOpenHeader } = useSelector(getAppState);
	return (
		<div className={s.page}>
			<Header />
			<div className={cn(s.wrapper, { [s.p_l]: isOpenHeader })}>
				{main}
			</div>
			<div className={s.background}>
				<img src={bacMain} alt="background" />
			</div>
		</div>
	);
};
