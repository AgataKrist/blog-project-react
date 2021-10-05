import { ActionType, createReducer } from "typesafe-actions";

import { setMailResetPasswordAction } from "./../actions/resetPasswordActions";

export interface IResetPassword {
	mailReset: string;
	newPassword: string;
	newPasswordConfirm: string;
}

const defaultState: IResetPassword = {
	mailReset: "",
	newPassword: "",
	newPasswordConfirm: "",
};

const actions = {
	setMailResetPasswordAction,
};

export const resetPasswordReducer = createReducer<
	IResetPassword,
	ActionType<typeof actions>
>(defaultState).handleAction(
	setMailResetPasswordAction,
	(state, { payload }) => ({
		...state,
		mailReset: payload,
	})
);
