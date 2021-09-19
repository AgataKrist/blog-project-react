import { combineReducers } from "redux";

import { appReducer } from "../core/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
});
