import { IActivationPayload, IToken, IUserLoginAuth } from "./../../types/user";
import {
	sendRegistrationDataErrorAction,
	sendRegistrationDatSuccessAction,
	setMailRegistrationAction,
	setPasswordConfirmRegistrationAction,
	setPasswordRegistrationAction,
	setUserRegistrationAction,
} from "./../actions/registrationActions";
import { takeEvery } from "@redux-saga/core/effects";
import { Action } from "redux-actions";
import { IUserAuth } from "../../types/user";
import { ACTIONS } from "../actions/constants";
import { call, put } from "redux-saga/effects";
import { AuthService } from "../../services/AuthService";
import { sendLoginDataErrorAction, sendLoginDataSuccessAction } from "..";

function* sendRegistrationSaga({
	payload: { username, password, email },
}: Action<IUserAuth>) {
	try {
		yield put(
			sendRegistrationDataErrorAction({
				username: null,
				email: null,
				password: null,
			})
		);
		yield put(
			setUserRegistrationAction({
				value: "",
				isValid: true,
			})
		);
		// yield put(
		// 	setMailRegistrationAction({
		// 		value: email,
		// 		isValid: true,
		// 	})
		// );
		yield put(
			setPasswordRegistrationAction({
				value: "",
				isValid: true,
			})
		);
		yield put(
			setPasswordConfirmRegistrationAction({
				value: "",
				isValid: true,
			})
		);
		yield put(sendRegistrationDatSuccessAction(false));

		yield call(() =>
			AuthService.registration({
				username,
				password,
				email,
			})
		);
		yield put(sendRegistrationDatSuccessAction(true));
	} catch (e: any) {
		const error = Object.entries(e.response.data).reduce(
			(acc: any, field: any) => {
				return {
					...acc,
					[field[0]]: field[1].join(""),
				};
			},
			{}
		);

		yield put(sendRegistrationDataErrorAction(error));
	}
}
function* confirmationRegistrationSaga({
	payload: { token, uid },
}: Action<IActivationPayload>) {
	try {
		yield call(() =>
			AuthService.activateUser({
				token,
				uid,
			})
		);
		// yield put(sendRegistrationDatSuccessAction(true));
	} catch (e: any) {
		// const error = Object.entries(e.response.data).reduce(
		// 	(acc: any, field: any) => {
		// 		return {
		// 			...acc,
		// 			[field[0]]: field[1].join(""),
		// 		};
		// 	},
		// 	{}
		// );
		// yield put(sendRegistrationDataErrorAction(error));
	}
}
function* loginSaga({ payload: { email, password } }: Action<IUserLoginAuth>) {
	try {
		//@ts-ignore
		const data: { data: IToken } = yield call(() =>
			AuthService.login({
				email,
				password,
			})
		);
		const { access, refresh } = data.data as any;

		localStorage.setItem("access", access);
		localStorage.setItem("refresh", refresh);

		// yield put(sendLoginDataSuccessAction(true));

		// const usersData: { data: IToken } = yield call(() =>
		// 	AuthService.getUsers()
		// );

		// const users = usersData?.data as any;
	} catch (e: any) {
		// const error = Object.entries(e.response.data).reduce(
		// 	(acc: any, field: any) => {
		// 		return {
		// 			...acc,
		// 			[field[0]]: field[1].join(""),
		// 		};
		// 	},
		// 	{}
		// );
		yield put(sendLoginDataErrorAction("bad"));
		console.log(e);
	}
}

export function* authSaga() {
	yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, sendRegistrationSaga);
	yield takeEvery(ACTIONS.SENT_LOGIN_DATA, loginSaga);
	yield takeEvery(
		ACTIONS.SEND_REGISTRATIONN_CONFIRMATION,
		confirmationRegistrationSaga
	);
}
