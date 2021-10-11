import { NewPassword } from "./../../components/pages/NewPassword";
import { IInput } from "./../../types/user";
import { ActionType, createReducer } from "typesafe-actions";

import {
	setMailResetPasswordAction,
	setIsSuccesResetPasswordAction,
	setIsPreloaderdAction,
	setNewPasswordAction,
	setNewPasswordConfirmAction,
} from "./../actions/resetPasswordActions";

export interface IResetPassword {
	email: IInput;
	newPassword: IInput;
	newPasswordConfirm: IInput;
	isSuccess: boolean;
	isPreloader: boolean;
}

const defaultState: IResetPassword = {
	email: {
		value: "",
		isValid: true,
	},
	newPassword: {
		value: "",
		isValid: true,
	},
	newPasswordConfirm: {
		value: "",
		isValid: true,
	},
	isSuccess: false,
	isPreloader: true,
};

const actions = {
	setMailResetPasswordAction,
	setIsSuccesResetPasswordAction,
	setIsPreloaderdAction,
	setNewPasswordAction,
	setNewPasswordConfirmAction,
};

export const resetPasswordReducer = createReducer<
	IResetPassword,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setMailResetPasswordAction, (state, { payload: email }) => ({
		...state,
		email,
	}))
	.handleAction(
		setIsSuccesResetPasswordAction,
		(state, { payload: isSuccess }) => ({
			...state,
			isSuccess,
		})
	)
	.handleAction(setIsPreloaderdAction, (state, { payload: isPreloader }) => ({
		...state,
		isPreloader,
	}))
	.handleAction(setNewPasswordAction, (state, { payload: newPassword }) => ({
		...state,
		newPassword,
	}))
	.handleAction(
		setNewPasswordConfirmAction,
		(state, { payload: newPasswordConfirm }) => ({
			...state,
			newPasswordConfirm,
		})
	);
