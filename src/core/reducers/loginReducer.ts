import { ActionType, createReducer } from "typesafe-actions";

import { setMailLogin, setPasswordLogin } from "../actions";

export interface ILoginState {
  mail: string;
  password: string;
}

const defaultState: ILoginState = {
  mail: "",
  password: "",
};

const actions = {
  setMailLogin,
  setPasswordLogin,
};

export const loginReducer = createReducer<
  ILoginState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setMailLogin, (state, { payload }) => ({
    ...state,
    mail: payload,
  }))
  .handleAction(setPasswordLogin, (state, { payload }) => ({
    ...state,
    password: payload,
  }));
