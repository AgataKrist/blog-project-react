import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setMailResetPasswordAction = createAction(
	ACTIONS.SET_MAIL_RESET
)<string>();
