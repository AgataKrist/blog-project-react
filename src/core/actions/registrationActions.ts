import { IActivationPayload } from "./../../types/user";
import { createAction } from "typesafe-actions";
import { ACTIONS } from "./constants";
import { IInput, IUserAuth } from "../../types/user";

export const setMailRegistrationAction = createAction(
	ACTIONS.SET_MAIL
)<IInput>();
export const setPasswordRegistrationAction = createAction(
	ACTIONS.SET_PASSWORD
)<IInput>();
export const setPasswordConfirmRegistrationAction = createAction(
	ACTIONS.SET_PASSWORD_CONFIRM
)<IInput>();
export const setUserRegistrationAction = createAction(ACTIONS.SET_USER)<any>();
export const sendRegistrationDataAction = createAction(
	ACTIONS.SEND_REGISTRATION_DATA
)<IUserAuth>();
export const sendRegistrationDataSuccessAction = createAction(
	ACTIONS.SEND_REGISTRATION_DATA_SUCCESS
)<boolean>();
export const sendRegistrationDataErrorAction = createAction(
	ACTIONS.SEND_REGISTRATION_DATA_ERROR
)<any | null>();
export const sendRegistrationConfirmationAction = createAction(
	ACTIONS.SEND_REGISTRATION_CONFIRMATION
)<IActivationPayload>();
export const sendRegistrationIsPreloaderAction = createAction(
	ACTIONS.SEND_REGISTRATION_IS_PRELOADER
)<boolean>();
