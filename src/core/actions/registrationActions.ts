import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setMailRegistration = createAction(
  ACTIONS.SET_MAIL_ACTION
)<string>();
export const setPasswordRegistration = createAction(
  ACTIONS.SET_PASSWORD_ACTION
)<string>();
export const setPasswordConfirmRegistration = createAction(
  ACTIONS.SET_PASSWORD_CONFIRM_ACTION
)<string>();
export const setUserRegistration = createAction(
  ACTIONS.SET_USER_ACTION
)<string>();
