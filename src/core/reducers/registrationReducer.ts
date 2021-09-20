import { ActionType, createReducer } from "typesafe-actions";

import {
  setMailRegistration,
  setPasswordRegistration,
  setPasswordConfirmRegistration,
  setUserRegistration,
} from "../actions";

export interface IRegistrationReducer {
  user: string;
  mail: string;
  password: string;
  passwordConfirm: string;
}

const defaultState: IRegistrationReducer = {
  user: "",
  mail: "",
  passwordConfirm: "",
  password: "",
};

const actions = {
  setMailRegistration,
  setPasswordRegistration,
  setPasswordConfirmRegistration,
  setUserRegistration,
};

export const registrationReducer = createReducer<
  IRegistrationReducer,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setMailRegistration, (state, { payload }) => ({
    ...state,
    mail: payload,
  }))
  .handleAction(setPasswordRegistration, (state, { payload }) => ({
    ...state,
    password: payload,
  }))
  .handleAction(setPasswordConfirmRegistration, (state, { payload }) => ({
    ...state,
    passwordConfirm: payload,
  }))
  .handleAction(setUserRegistration, (state, { payload }) => ({
    ...state,
    user: payload,
  }));
