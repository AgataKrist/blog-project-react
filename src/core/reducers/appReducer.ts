import { ActionType, createReducer } from "typesafe-actions";

import { setIsOpenHeaderAction } from "../actions";

export interface IAppState {
	isOpenHeader: boolean;
}

const defaultState: IAppState = {
	isOpenHeader: false,
};

const actions = {
	setIsOpenHeaderAction,
};

export const appReducer = createReducer<IAppState, ActionType<typeof actions>>(
	defaultState
).handleAction(setIsOpenHeaderAction, (state, { payload }) => ({
	...state,
	isOpenHeader: payload,
}));
