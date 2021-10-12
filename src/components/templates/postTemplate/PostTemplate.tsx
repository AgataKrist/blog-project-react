import React from "react";
import s from "./PostTemplate.module.css";
import { Header } from "../../moleculs/header/Header";
import { Title } from "../../atoms/title";
import cn from "classnames";
import { useSelector } from "react-redux";
import { getAppState } from "../../../core/selectors/appSelectors";

interface ISignTemplate {
	main: React.ReactNode;
	title: string;
	isActiveLogin?: boolean;
	isActiveRegistration?: boolean;
	selectedPost?: boolean;
}

export const PostTemplate = ({ main, title, selectedPost }: ISignTemplate) => {
	const { isOpenHeader } = useSelector(getAppState);

	return (
		<div className={s.page}>
			<Header />
			<div className={cn(s.title__wrapper, { [s.p_l]: isOpenHeader })}>
				<Title title={title} />
				<button className={cn(s.add, { [s.dn]: selectedPost })}>
					+ Add
				</button>
			</div>
			<div className={cn(s.wrapper, { [s.p_l]: isOpenHeader })}>
				{main}
			</div>
		</div>
	);
};
