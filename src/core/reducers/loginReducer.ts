import { ActionType, createReducer } from "typesafe-actions";

import { setMailLoginAction, setPasswordLogin } from "../actions";

export interface ILoginState {
	mail: string;
	password: string;
}

const defaultState: ILoginState = {
	mail: "",
	password: "",
};

const actions = {
	setMailLoginAction,
	setPasswordLogin,
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
	}));
