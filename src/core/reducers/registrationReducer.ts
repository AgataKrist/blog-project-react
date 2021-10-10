import { IError, IInput } from "./../../types/user";
import { ActionType, createReducer } from "typesafe-actions";

import {
	setMailRegistrationAction,
	setPasswordRegistrationAction,
	setPasswordConfirmRegistrationAction,
	setUserRegistrationAction,
	sendRegistrationDataErrorAction,
	sendRegistrationDataSuccessAction,
	sendRegistrationIsPreloaderAction,
} from "../actions";

export interface IRegistrationReducer {
	username: IInput;
	email: IInput;
	password: IInput;
	passwordConfirm: IInput;
	error: IError;
	success: boolean;
	isPreloader: boolean;
}

const defaultState: IRegistrationReducer = {
	username: {
		value: "",
		isValid: true,
	},
	email: {
		value: "",
		isValid: true,
	},
	passwordConfirm: {
		value: "",
		isValid: true,
	},
	password: {
		value: "",
		isValid: true,
	},
	error: {
		username: null,
		email: null,
		password: null,
	},
	success: false,
	isPreloader: true,
};
const actions = {
	setMailRegistrationAction,
	setPasswordRegistrationAction,
	setPasswordConfirmRegistrationAction,
	setUserRegistrationAction,
	sendRegistrationDataErrorAction,
	sendRegistrationDataSuccessAction,
	sendRegistrationIsPreloaderAction,
};

export const registrationReducer = createReducer<
	IRegistrationReducer,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setMailRegistrationAction, (state, { payload: email }) => ({
		...state,
		email,
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
	.handleAction(
		setUserRegistrationAction,
		(state, { payload: username }) => ({
			...state,
			username,
		})
	)
	.handleAction(
		sendRegistrationDataErrorAction,
		(state, { payload: error }) => ({
			...state,
			error,
		})
	)
	.handleAction(
		sendRegistrationDataSuccessAction,
		(state, { payload: success }) => ({
			...state,
			success,
		})
	)
	.handleAction(
		sendRegistrationIsPreloaderAction,
		(state, { payload: isPreloader }) => ({
			...state,
			isPreloader,
		})
	);
