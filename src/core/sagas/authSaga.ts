import {
	setIsPreloaderdAction,
	setIsSuccesResetPasswordAction,
} from "./../actions/resetPasswordActions";
import {
	IActivationPayload,
	INewPasswordPayload,
	IToken,
	IUserEmail,
	IUserLoginAuth,
} from "./../../types/user";
import {
	sendRegistrationDataErrorAction,
	sendRegistrationDataSuccessAction,
	sendRegistrationIsPreloaderAction,
} from "./../actions/registrationActions";
import { takeEvery } from "@redux-saga/core/effects";
import { Action } from "redux-actions";
import { IUserAuth } from "../../types/user";
import { ACTIONS } from "../actions/constants";
import { call, put } from "redux-saga/effects";
import { AuthService } from "../../services/AuthService";
import {
	sendLoginDataErrorAction,
	sendLoginDataSuccessAction,
} from "../actions/loginActions";
import { UserService } from "../../services/UserService";

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

		yield call(() =>
			AuthService.registration({
				username,
				password,
				email,
			})
		);
		yield put(sendRegistrationDataSuccessAction(true));
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
		yield put(sendRegistrationIsPreloaderAction(false));
		yield put(sendRegistrationDataSuccessAction(true));
	} catch (e: any) {}
}
function* loginSaga({ payload: { email, password } }: Action<IUserLoginAuth>) {
	try {
		//@ts-ignore
		sendLoginDataErrorAction(null);
		const data: { data: IToken } = yield call(() =>
			AuthService.login({
				email,
				password,
			})
		);
		const { access, refresh } = data.data as any;

		localStorage.setItem("access", access);
		localStorage.setItem("refresh", refresh);

		yield put(sendLoginDataSuccessAction(true));

		const usersData: { data: any } = yield call(() =>
			UserService.getUsers()
		);

		const users = usersData?.data as any;
		console.log(`users`, users);
	} catch (e: any) {
		yield put(
			sendLoginDataErrorAction(
				"No active account found with the given credentials"
			)
		);
	}
}

function* sendResetPasswordSaga({ payload: { email } }: Action<IUserEmail>) {
	console.log(`email`, email);
	try {
		const data: { data: any } = yield call(() =>
			AuthService.getResetPasswordDate({ email })
		);
		yield put(setIsSuccesResetPasswordAction(true));
	} catch (e: any) {
		console.log(`{e}`, { e });
	}
}

function* confirmationResetPasswordSaga({
	payload: { token, uid, new_password },
}: Action<INewPasswordPayload>) {
	try {
		yield call(() =>
			AuthService.resetPasswordConfirm({
				token,
				uid,
				new_password,
			})
		);
		yield put(setIsPreloaderdAction(false));
		yield put(setIsSuccesResetPasswordAction(true));
	} catch (e: any) {}
}

export function* authSaga() {
	yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, sendRegistrationSaga);
	yield takeEvery(ACTIONS.SENT_LOGIN_DATA, loginSaga);
	yield takeEvery(
		ACTIONS.SEND_REGISTRATION_CONFIRMATION,
		confirmationRegistrationSaga
	);
	yield takeEvery(ACTIONS.SEND_RESET_PASSWORD, sendResetPasswordSaga);
	yield takeEvery(
		ACTIONS.SEND_RESET_PASSWORD_CONFIRM,
		confirmationResetPasswordSaga
	);
}
