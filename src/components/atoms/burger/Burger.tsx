import React from "react";
import s from "./Burger.module.css";
import cn from "classnames";

interface IBurger {
	onClick: () => void;
	isOpened: boolean;
}

export const Burger = ({ onClick, isOpened }: IBurger) => {
	return (
		<div onClick={onClick} className={s.wrapper}>
			<div
				className={cn(s.line, s.line1, { [s.opened]: isOpened })}
			></div>
			<div
				className={cn(s.line, s.line2, { [s.opened]: isOpened })}
			></div>
			<div
				className={cn(s.line, s.line3, { [s.opened]: isOpened })}
			></div>
		</div>
	);
};
