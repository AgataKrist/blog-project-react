import { Link } from "react-router-dom";
import s from "./Header.module.css";
import cn from "classnames";
import { Burger } from "../../atoms/burger";

import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenHeaderAction } from "../../../core";
import { getAppState } from "../../../core/selectors/appSelectors";

export const Header = () => {
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

	return (
		<div className={cn(s.wrapper)}>
			<div
				className={cn(s.background, { [s.opened]: isOpenHeader })}
			></div>
			<Burger isOpened={isOpenHeader} onClick={toggleMenu} />

			<ul className={cn(s.menu__box, { [s.opened]: isOpenHeader })}>
				<li>
					<Link className={s.menu__item} to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className={s.menu__item} to="/login">
						Login
					</Link>
				</li>
				<li>
					<Link className={s.menu__item} to="/registration">
						Registration
					</Link>
				</li>
				<li>
					<Link className={s.menu__item} to="/registration">
						Registration
					</Link>
				</li>
				<li>
					<Link className={s.menu__item} to="/registration">
						Registration
					</Link>
				</li>
			</ul>
		</div>
	);
};
