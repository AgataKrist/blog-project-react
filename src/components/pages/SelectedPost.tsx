import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSelectedPostAction } from "../../core";
import { getPostsState } from "../../core/selectors/postsSelector";

import { Post } from "../moleculs/post/Post";
import { PostTemplate } from "../templates/postTemplate";

export const SelectedPost = () => {
	const params = useParams() as any;
	const { selectedPost } = useSelector(getPostsState) as any;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSelectedPostAction(params.id));
		// dispatch(getPostsAction());
	}, [dispatch, params.id]);
	return (
		<>
			<PostTemplate
				selectedPost
				title={""}
				main={
					<>
						{selectedPost && (
							<Post post={selectedPost} key={selectedPost.id} />
						)}
					</>
				}
			/>
		</>
	);
};
