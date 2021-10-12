import React from "react";
import s from "./Post.module.css";
import cn from "classnames";
import img from "../../../assets/postImg.png";

interface IPosts {
	myPost?: boolean;
	post?: any;
}

export const Post = ({ myPost, post }: IPosts) => {
	return (
		<div className={cn(s.wrapper)}>
			<div className={s.post__item}>
				<div className={s.img}>
					<img src={post.image} alt={"IMGPOST"} />
				</div>
				<div className={s.title}>
					<h2>{post.title}</h2>
				</div>
				<div className={s.text}>
					<p>{post.text}</p>
				</div>
				<div className={s.post__footer}>
					<span className={s.date}>{post.date}</span>
					{!myPost && <span className={s.name}>{post.author}</span>}
				</div>
			</div>
		</div>
	);
};
