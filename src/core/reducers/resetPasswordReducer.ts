import { ActionType, createReducer } from "typesafe-actions";

import { setMailResetPassword } from "./../actions/resetPasswordActions";

export interface IResetPassword {
  mailReset: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const defaultState: IResetPassword = {
  mailReset: "",
  newPassword: "",
  newPasswordConfirm: "",
};

const actions = {
  setMailResetPassword,
};

export const resetPasswordReducer = createReducer<
  IResetPassword,
  ActionType<typeof actions>
>(defaultState).handleAction(setMailResetPassword, (state, { payload }) => ({
  ...state,
  mailReset: payload,
}));
