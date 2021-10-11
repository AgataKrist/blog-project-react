import { IInput, IUserEmail } from "./../../types/user";
import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setMailResetPasswordAction = createAction(
	ACTIONS.SET_MAIL_RESET
)<IInput>();
export const sendResetPasswordAction = createAction(
	ACTIONS.SEND_RESET_PASSWORD
)<IUserEmail>();
export const setIsSuccesResetPasswordAction = createAction(
	ACTIONS.SET_IS_SUCCESS_RESER_PASSWORD
)<boolean>();
export const sendResetPasswordConfirmationAction = createAction(
	ACTIONS.SEND_RESET_PASSWORD_CONFIRM
)<boolean>();
export const setIsPreloaderdAction = createAction(
	ACTIONS.SEND_RESET_PASSWORD_IS_PRELOADER
)<boolean>();
export const setNewPasswordAction = createAction(
	ACTIONS.SEND_NEW_PASSWORD
)<IInput>();
export const setNewPasswordConfirmAction = createAction(
	ACTIONS.SEND_NEW_PASSWORD_CONFIRM
)<IInput>();
