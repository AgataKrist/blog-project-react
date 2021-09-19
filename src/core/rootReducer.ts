import { combineReducers } from "redux";

import { appReducer } from "../core/reducers";
import { loginReducer } from "./reducers/loginReducer";
import { regReducer } from "./reducers/registrationReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  reg: regReducer,
});
