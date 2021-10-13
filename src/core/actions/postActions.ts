import { IPost, IPostSendRequest } from "./../../types/post";
import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setPostsAction = createAction(ACTIONS.SET_POSTS)<IPost[] | null>();
export const setMyPostsAction = createAction(ACTIONS.SET_MY_POSTS)<
	IPost[] | null
>();

export const getPostsAction = createAction(ACTIONS.GET_POSTS)();

export const getMyPostsAction = createAction(ACTIONS.GET_MY_POSTS)();
export const getSelectedPostAction = createAction(
	ACTIONS.GET_SELECTED_POST
)<number>();
export const setSelectedPostAction = createAction(ACTIONS.SET_SELECTED_POST)<
	IPost[] | null
>();
export const setMyPostErrorAction = createAction(ACTIONS.SET_MY_POST_ERROR)<
	number | null
>();
export const sendPostAction = createAction(
	ACTIONS.SEND_POST
)<IPostSendRequest>();
