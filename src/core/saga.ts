import { all } from "redux-saga/effects";

import { authSaga } from "./sagas";
import { postsSaga } from "./sagas/postSags";

export function* rootSaga() {
	try {
		yield all([authSaga(), postsSaga()]);
	} catch (e) {
		console.log(`e`, e);
	}
}
