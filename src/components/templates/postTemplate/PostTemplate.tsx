import React from "react";
import s from "./PostTemplate.module.css";
import { Header } from "../../moleculs/header/Header";
import { Title } from "../../atoms/title";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getAppState } from "../../../core/selectors/appSelectors";
import { setIsOpenHeaderAction } from "../../../core";

interface ISignTemplate {
	main: React.ReactNode;
	title: string;
	isActiveLogin?: boolean;
	isActiveRegistration?: boolean;
	selectedPost?: boolean;
	onModalToogle?: () => void;
}

export const PostTemplate = ({
	main,
	title,
	selectedPost,
	onModalToogle,
}: ISignTemplate) => {
	const { isOpenHeader } = useSelector(getAppState);
	const dispatch = useDispatch();

	return (
		<div
			onClick={() => dispatch(setIsOpenHeaderAction(false))}
			className={s.page}
		>
			<Header />
			<div className={cn(s.title__wrapper, { [s.p_l]: isOpenHeader })}>
				<Title title={title} />
				<button
					onClick={onModalToogle}
					className={cn(s.add, { [s.dn]: selectedPost })}
				>
					+ Add
				</button>
			</div>
			<div className={cn(s.wrapper, { [s.p_l]: isOpenHeader })}>
				{main}
			</div>
		</div>
	);
};
