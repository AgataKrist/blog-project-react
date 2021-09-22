import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setIsOpenHeaderAction = createAction(
	ACTIONS.SET_IS_OPEN_HEADER
)<boolean>();
