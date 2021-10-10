import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPostsAction } from "../../core";
import { getPostsState } from "../../core/selectors/postsSelector";

import { Post } from "../moleculs/post/Post";
import { PostTemplate } from "../templates/postTemplate";

export const MyPosts = () => {
	const { myPosts, myPostError } = useSelector(getPostsState) as any;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyPostsAction());
	}, [dispatch]);

	return (
		<>
			<PostTemplate
				title={"My posts"}
				main={
					<>
						{myPostError === "404" ? (
							<Post post={myPosts} key={myPosts.id} myPost />
						) : (
							<h1>Not have post</h1>
						)}
					</>
				}
			/>
		</>
	);
};
