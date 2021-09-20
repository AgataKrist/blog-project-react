import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setMailResetPassword = createAction(
  ACTIONS.SET_MAIL_RESET_ACTION
)<string>();
