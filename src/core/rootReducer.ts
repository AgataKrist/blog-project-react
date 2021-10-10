import { combineReducers } from "redux";

import { appReducer } from "../core/reducers";
import { loginReducer } from "./reducers/loginReducer";
import { postsReducer } from "./reducers/PostsReducer";
import { registrationReducer } from "./reducers/registrationReducer";
import { resetPasswordReducer } from "./reducers/resetPasswordReducer";

export const rootReducer = combineReducers({
	app: appReducer,
	login: loginReducer,
	reg: registrationReducer,
	res: resetPasswordReducer,
	posts: postsReducer,
});
