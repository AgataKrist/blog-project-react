import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsAction } from "../../core";
import { getPostsState } from "../../core/selectors/postsSelector";
import { Modal } from "../moleculs/modal";

import { Post } from "../moleculs/post/Post";
import { PostTemplate } from "../templates/postTemplate";

export const AllPosts = () => {
	const [isModal, setIsModal] = useState(false);
	const { posts } = useSelector(getPostsState);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPostsAction());
	}, [dispatch, isModal]);

	return (
		<>
			<PostTemplate
				onModalToogle={() => {
					setIsModal(true);
				}}
				title={"All posts"}
				main={
					<>
						{posts?.map(post => {
							return (
								<Link
									style={{
										textDecoration: "none",
										boxShadow:
											"0px -5px 5px -5px rgba(34, 60, 80, 0.6)",
										borderRadius: "20px",
									}}
									key={post.id}
									to={`posts/${post.id}`}
								>
									<Post
										author={post.author}
										post={post}
										key={post.id}
									/>
								</Link>
							);
						})}
					</>
				}
			/>
			<Modal
				onModalClose={() => {
					setIsModal(false);
				}}
				active={isModal}
				setActive={setIsModal}
			/>
		</>
	);
};
