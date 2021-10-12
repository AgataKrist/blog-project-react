import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsAction } from "../../core";
import { getPostsState } from "../../core/selectors/postsSelector";

import { Post } from "../moleculs/post/Post";
import { PostTemplate } from "../templates/postTemplate";

export const AllPosts = () => {
	const { posts } = useSelector(getPostsState);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPostsAction());
	}, [dispatch]);

	return (
		<>
			<PostTemplate
				title={"All posts"}
				main={
					<>
						{posts?.map(post => {
							return (
								<Link key={post.id} to={`posts/${post.id}`}>
									<Post post={post} key={post.id} />
								</Link>
							);
						})}
					</>
				}
			/>
		</>
	);
};
