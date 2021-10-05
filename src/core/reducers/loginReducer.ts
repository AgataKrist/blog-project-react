import { ActionType, createReducer } from "typesafe-actions";

import {
	sendLoginDataErrorAction,
	sendLoginDataSuccessAction,
	setMailLoginAction,
	setPasswordLogin,
} from "../actions";

export interface ILoginState {
	mail: string;
	password: string;
	error: string | null;
	isSuccess: boolean;
}

const defaultState: ILoginState = {
	mail: "",
	password: "",
	error: null,
	isSuccess: false,
};

const actions = {
	setMailLoginAction,
	setPasswordLogin,
	sendLoginDataErrorAction,
	sendLoginDataSuccessAction,
};

export const loginReducer = createReducer<
	ILoginState,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setMailLoginAction, (state, { payload }) => ({
		...state,
		mail: payload,
	}))
	.handleAction(setPasswordLogin, (state, { payload }) => ({
		...state,
		password: payload,
	}))
	.handleAction(sendLoginDataErrorAction, (state, { payload }) => ({
		...state,
		error: payload,
	}))
	.handleAction(sendLoginDataSuccessAction, (state, { payload }) => ({
		...state,
		isSuccess: payload,
	}));
