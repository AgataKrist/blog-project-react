import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setMailRegistration = createAction(ACTIONS.SET_MAIL)<string>();
export const setPasswordRegistration = createAction(
  ACTIONS.SET_PASSWORD
)<string>();
export const setPasswordConfirmRegistration = createAction(
  ACTIONS.SET_PASSWORD_CONFIRM
)<string>();
export const setUserRegistration = createAction(ACTIONS.SET_USER)<string>();
