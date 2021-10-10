import { IInput } from "./../../types/user";
import { ActionType, createReducer } from "typesafe-actions";

import {
	sendLoginDataErrorAction,
	sendLoginDataSuccessAction,
	setMailLoginAction,
	setPasswordLoginAction,
} from "../actions";

export interface ILoginState {
	email: IInput;
	password: IInput;
	error: string | null;
	isSuccess: boolean;
}

const defaultState: ILoginState = {
	email: {
		value: "",
		isValid: true,
	},
	password: {
		value: "",
		isValid: true,
	},
	error: null,
	isSuccess: false,
};

const actions = {
	setMailLoginAction,
	setPasswordLoginAction,
	sendLoginDataErrorAction,
	sendLoginDataSuccessAction,
};

export const loginReducer = createReducer<
	ILoginState,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setMailLoginAction, (state, { payload: email }) => ({
		...state,
		email,
	}))
	.handleAction(setPasswordLoginAction, (state, { payload: password }) => ({
		...state,
		password,
	}))
	.handleAction(sendLoginDataErrorAction, (state, { payload }) => ({
		...state,
		error: payload,
	}))
	.handleAction(sendLoginDataSuccessAction, (state, { payload }) => ({
		...state,
		isSuccess: payload,
	}));
