import { Link } from "react-router-dom";
import s from "./Header.module.css";
import cn from "classnames";
import { Burger } from "../../atoms/burger";

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	sendLoginDataSuccessAction,
	setIsOpenHeaderAction,
	setMyPostsAction,
} from "../../../core";
import { getAppState } from "../../../core/selectors/appSelectors";

export const Header = () => {
	const menuItems = [
		{
			text: "Home",
			to: "/",
		},
		{
			text: "Login",
			to: "/login",
		},
		{
			text: "Registration",
			to: "/registration",
		},
		{
			text: "LogOut",
			to: "/login",
		},
		{
			text: "All post",
			to: "/all-posts",
		},
		{
			text: "My posts",
			to: "/my-posts",
		},
	];
	const { isOpenHeader } = useSelector(getAppState);

	const dispatch = useDispatch();

	const toggleMenu = useCallback(() => {
		dispatch(setIsOpenHeaderAction(!isOpenHeader));
	}, [dispatch, isOpenHeader]);

	useEffect(() => {
		return () => {
			dispatch(setIsOpenHeaderAction(false));
		};
	}, [dispatch]);
	const logout = () => {
		localStorage.clear();
		dispatch(setMyPostsAction(null));
		dispatch(sendLoginDataSuccessAction(false));
	};

	return (
		<div onClick={e => e.stopPropagation()} className={cn(s.wrapper)}>
			<div
				className={cn(s.background, { [s.opened]: isOpenHeader })}
			></div>
			<Burger isOpened={isOpenHeader} onClick={toggleMenu} />

			<ul className={cn(s.menu__box, { [s.opened]: isOpenHeader })}>
				{menuItems.map(({ text, to }) => {
					return (
						<Link
							onClick={
								text === "LogOut"
									? logout
									: () => {
											return;
									  }
							}
							className={s.menu__item}
							to={to}
						>
							{text}
						</Link>
					);
				})}
			</ul>
		</div>
	);
};
