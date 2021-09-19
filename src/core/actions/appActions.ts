import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setIsOpenHeader = createAction(
  ACTIONS.SET_IS_OPEN_HEADER
)<boolean>();
export const setIsValidUser = createAction(
  ACTIONS.SET_IS_VALID_USER
)<boolean>();
export const setIsValidPassword = createAction(
  ACTIONS.SET_IS_VALID_PASSWORD
)<boolean>();
export const setIsValidPasswordConfirm = createAction(
  ACTIONS.SET_IS_VALID_PASSWORD_CONFIRM
)<boolean>();
export const setIsValidMail = createAction(
  ACTIONS.SET_IS_VALID_MAIL
)<boolean>();
