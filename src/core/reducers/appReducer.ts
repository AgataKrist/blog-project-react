import { ActionType, createReducer } from "typesafe-actions";

import { setIsOpenHeader } from "../actions";

export interface IAppState {
  isOpenHeader: boolean;
}

const defaultState: IAppState = {
  isOpenHeader: false,
};

const actions = {
  setIsOpenHeader,
};

export const appReducer = createReducer<IAppState, ActionType<typeof actions>>(
  defaultState
).handleAction(setIsOpenHeader, (state, { payload }) => ({
  ...state,
  isOpenHeader: payload,
}));
