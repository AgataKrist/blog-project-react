import { ActionType, createReducer } from "typesafe-actions";
import { IPost } from "../../types/post";

import {
	setMyPostsAction,
	setPostsAction,
	setSelectedPostAction,
	setMyPostErrorAction,
} from "../actions/postActions";

export interface IPostsState {
	posts: IPost[] | null;
	myPosts: IPost[] | null;
	selectedPost: IPost[] | null;
	myPostError: number | null;
}

const defaultState: IPostsState = {
	posts: null,
	myPosts: null,
	selectedPost: null,
	myPostError: null,
};

const actions = {
	setPostsAction,
	setMyPostsAction,
	setSelectedPostAction,
	setMyPostErrorAction,
};

export const postsReducer = createReducer<
	IPostsState,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setPostsAction, (state, { payload }) => ({
		...state,
		posts: payload,
	}))
	.handleAction(setMyPostsAction, (state, { payload }) => ({
		...state,
		myPosts: payload,
	}))
	.handleAction(
		setSelectedPostAction,
		(state, { payload: selectedPost }) => ({
			...state,
			selectedPost,
		})
	)
	.handleAction(setMyPostErrorAction, (state, { payload: myPostError }) => ({
		...state,
		myPostError,
	}));
