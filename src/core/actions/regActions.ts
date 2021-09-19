import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setMail = createAction(ACTIONS.SET_MAIL)<string>();
export const setPassword = createAction(ACTIONS.SET_PASSWORD)<string>();
export const setPasswordConfirm = createAction(
  ACTIONS.SET_PASSWORD_CONFIRM
)<string>();
export const setUser = createAction(ACTIONS.SET_USER)<string>();
