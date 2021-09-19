import { ActionType, createReducer } from "typesafe-actions";

import { setMail, setPassword } from "../actions";

export interface IAppState {
  mail: string;
  password: string;
}

const defaultState: IAppState = {
  mail: "",
  password: "",
};

const actions = {
  setMail,
  setPassword,
};

export const loginReducer = createReducer<
  IAppState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setMail, (state, { payload }) => ({
    ...state,
    mail: payload,
  }))
  .handleAction(setPassword, (state, { payload }) => ({
    ...state,
    password: payload,
  }));
