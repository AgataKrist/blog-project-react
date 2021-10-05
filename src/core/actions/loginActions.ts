import { createAction } from "typesafe-actions";
import { IUserLoginAuth } from "../../types/user";

import { ACTIONS } from "./constants";

export const setMailLoginAction = createAction(
	ACTIONS.SET_MAIL_LOGIN
)<string>();
export const setPasswordLogin = createAction(
	ACTIONS.SET_PASSWORD_LOGIN
)<string>();
export const sendLoginDataAction = createAction(
	ACTIONS.SENT_LOGIN_DATA
)<IUserLoginAuth>();
export const sendLoginDataErrorAction = createAction(
	ACTIONS.SENT_LOGIN_DATA_ERROR
)<string | null>();
export const sendLoginDataSuccessAction = createAction(
	ACTIONS.SENT_LOGIN_DATA_SUCCESS
)<boolean>();
