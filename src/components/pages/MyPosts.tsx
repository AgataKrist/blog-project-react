import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getMyPostsAction } from "../../core";
import { getPostsState } from "../../core/selectors/postsSelector";
import { Modal } from "../moleculs/modal";

import { Post } from "../moleculs/post/Post";
import { PostTemplate } from "../templates/postTemplate";

export const MyPosts = () => {
	const [isModal, setIsModal] = useState(false);
	const { myPosts, myPostError } = useSelector(getPostsState);
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		const accessToken = localStorage.getItem("access");
		const refreshToken = localStorage.getItem("refresh");
		if (!accessToken && !refreshToken) {
			history.push("/login");
		}
		dispatch(getMyPostsAction());
	}, [dispatch, history, myPostError, isModal]);

	return (
		<>
			<PostTemplate
				onModalToogle={() => {
					setIsModal(true);
				}}
				title={"My posts"}
				main={
					<>
						{myPostError !== 404 ? (
							myPosts?.map(myPost => {
								return (
									<Link
										style={{
											textDecoration: "none",
											boxShadow:
												"0px -5px 5px -5px rgba(34, 60, 80, 0.6)",
											borderRadius: "20px",
										}}
										key={myPost.id}
										to={`posts/${myPost.id}`}
									>
										<Post post={myPost} key={myPost.id} />
									</Link>
								);
							})
						) : (
							<h1>No posts</h1>
						)}
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
