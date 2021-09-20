import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setIsOpenHeader = createAction(
  ACTIONS.SET_IS_OPEN_HEADER_ACTION
)<boolean>();
