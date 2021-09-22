import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setMailRegistrationAction = createAction(
	ACTIONS.SET_MAIL
)<string>();
export const setPasswordRegistrationAction = createAction(
	ACTIONS.SET_PASSWORD
)<string>();
export const setPasswordConfirmRegistrationAction = createAction(
	ACTIONS.SET_PASSWORD_CONFIRM
)<string>();
export const setUserRegistrationAction = createAction(
	ACTIONS.SET_USER
)<string>();
