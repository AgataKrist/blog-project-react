import { ActionType, createReducer } from "typesafe-actions";

import { setMail, setPassword, setPasswordConfirm, setUser } from "../actions";

export interface IAppState {
  user: string;
  mail: string;
  password: string;
  passwordConfirm: string;
}

const defaultState: IAppState = {
  user: "",
  mail: "",
  passwordConfirm: "",
  password: "",
};

const actions = {
  setMail,
  setPassword,
  setPasswordConfirm,
  setUser,
};

export const regReducer = createReducer<IAppState, ActionType<typeof actions>>(
  defaultState
)
  .handleAction(setMail, (state, { payload }) => ({
    ...state,
    mail: payload,
  }))
  .handleAction(setPassword, (state, { payload }) => ({
    ...state,
    password: payload,
  }))
  .handleAction(setPasswordConfirm, (state, { payload }) => ({
    ...state,
    passwordConfirm: payload,
  }))
  .handleAction(setUser, (state, { payload }) => ({
    ...state,
    user: payload,
  }));
