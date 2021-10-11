import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getMyPostsAction } from "../../core";
import { getPostsState } from "../../core/selectors/postsSelector";

import { Post } from "../moleculs/post/Post";
import { PostTemplate } from "../templates/postTemplate";

export const MyPosts = () => {
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
	}, [dispatch, history, myPostError]);

	return (
		<>
			<PostTemplate
				title={"My posts"}
				main={
					<>
						{myPostError !== 404 ? (
							myPosts?.map(myPost => {
								return (
									<Link
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
		</>
	);
};
