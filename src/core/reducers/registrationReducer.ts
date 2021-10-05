import { ActionType, createReducer } from "typesafe-actions";

import {
	setMailRegistrationAction,
	setPasswordRegistrationAction,
	setPasswordConfirmRegistrationAction,
	setUserRegistrationAction,
} from "../actions";

export interface IRegistrationReducer {
	user: string;
	mail: string;
	password: string;
	passwordConfirm: string;
}

const defaultState: IRegistrationReducer = {
	user: "",
	mail: "",
	passwordConfirm: "",
	password: "",
};

const actions = {
	setMailRegistrationAction,
	setPasswordRegistrationAction,
	setPasswordConfirmRegistrationAction,
	setUserRegistrationAction,
};

export const registrationReducer = createReducer<
	IRegistrationReducer,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setMailRegistrationAction, (state, { payload: mail }) => ({
		...state,
		mail,
	}))
	.handleAction(
		setPasswordRegistrationAction,
		(state, { payload: password }) => ({
			...state,
			password,
		})
	)
	.handleAction(
		setPasswordConfirmRegistrationAction,
		(state, { payload: passwordConfirm }) => ({
			...state,
			passwordConfirm,
		})
	)
	.handleAction(setUserRegistrationAction, (state, { payload: user }) => ({
		...state,
		user,
	}));
