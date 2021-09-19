import { ActionType, createReducer } from "typesafe-actions";

import {
  setIsOpenHeader,
  setIsValidUser,
  setIsValidPassword,
  setIsValidMail,
  setIsValidPasswordConfirm,
} from "../../core/actions";

export interface IAppState {
  isOpenHeader: boolean;
  isValidUser: boolean;
  isValidPassword: boolean;
  isValidPasswordConfirm: boolean;
  isValidMail: boolean;
}

const defaultState: IAppState = {
  isOpenHeader: false,
  isValidUser: false,
  isValidPassword: false,
  isValidPasswordConfirm: false,
  isValidMail: false,
};

const actions = {
  setIsOpenHeader,
  setIsValidUser,
  setIsValidPassword,
  setIsValidPasswordConfirm,
  setIsValidMail,
};

export const appReducer = createReducer<IAppState, ActionType<typeof actions>>(
  defaultState
)
  .handleAction(setIsOpenHeader, (state, { payload }) => ({
    ...state,
    isOpenHeader: payload,
  }))
  .handleAction(setIsValidUser, (state, { payload }) => ({
    ...state,
    isValidUser: payload,
  }))
  .handleAction(setIsValidPassword, (state, { payload }) => ({
    ...state,
    isValidPassword: payload,
  }))
  .handleAction(setIsValidPasswordConfirm, (state, { payload }) => ({
    ...state,
    isValidPasswordConfirm: payload,
  }))
  .handleAction(setIsValidMail, (state, { payload }) => ({
    ...state,
    isValidMail: payload,
  }));
