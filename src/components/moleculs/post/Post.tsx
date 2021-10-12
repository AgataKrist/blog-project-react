import React from "react";
import s from "./Post.module.css";
import cn from "classnames";

interface IPosts {
	post?: any;
	author?: number;
}

export const Post = ({ post, author }: IPosts) => {
	return (
		<div className={cn(s.wrapper)}>
			<div className={s.post__item}>
				<div
					style={{
						backgroundImage: `url(${post.image})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
					className={s.img}
				></div>
				<div className={s.title}>
					<h2 className={s.title_text}>{post.title}</h2>
				</div>
				<div className={s.text}>
					<p>{post.text}</p>
				</div>
				<div className={s.post__footer}>
					<span className={s.date}>{post.date}</span>
					<span className={s.name}>{author}</span>
				</div>
			</div>
		</div>
	);
};
