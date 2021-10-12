export enum ACTIONS {
	SET_IS_OPEN_HEADER = "SET_IS_OPEN_HEADER",

	SET_MAIL = "SET_MAIL",
	SET_PASSWORD = "SET_PASSWORD",
	SET_PASSWORD_CONFIRM = "SET_PASSWORD_CONFIRM",
	SET_USER = "SET_USER",
	SET_MAIL_RESET = "SET_MAIL_RESET",

	SET_MAIL_LOGIN = "SET_MAIL_LOGIN",
	SET_PASSWORD_LOGIN = "SET_PASSWORD_LOGIN",

	SEND_REGISTRATION_DATA = "SEND_REGISTRATION_DATA",
	SEND_REGISTRATION_DATA_ERROR = "SEND_REGISTRATION_DATA_ERROR",
	SEND_REGISTRATION_DATA_SUCCESS = "SEND_REGISTRATION_DATA_SUCCESS",
	SEND_REGISTRATION_IS_PRELOADER = "SEND_REGISTRATION_IS_PRELOADER",

	SEND_REGISTRATION_CONFIRMATION = "SEND_REGISTRATION_CONFIRMATION",

	SEND_RESET_PASSWORD = "SEND_RESET_PASSWORD",
	SET_IS_SUCCESS_RESER_PASSWORD = "SET_IS_SUCCESS_RESER_PASSWORD",
	SEND_RESET_PASSWORD_CONFIRM = "SEND_RESET_PASSWORD_CONFIRM",
	SEND_RESET_PASSWORD_IS_PRELOADER = "SEND_RESET_PASSWORD_IS_PRELOADER",
	SEND_NEW_PASSWORD = "SEND_NEW_PASSWORD",
	SEND_NEW_PASSWORD_CONFIRM = "SEND_NEW_PASSWORD_CONFIRM",

	SENT_LOGIN_DATA = "SENT_LOGIN_DATA",
	SENT_LOGIN_DATA_ERROR = "SENT_LOGIN_DATA_ERROR",
	SENT_LOGIN_DATA_SUCCESS = "SENT_LOGIN_DATA_SUCCESS",

	//post
	SET_POSTS = "SET_POSTS",
	SET_MY_POSTS = "SET_MY_POSTS",
	GET_POSTS = "GET_POSTS",
	GET_MY_POSTS = "GET_MY_POSTS",

	GET_SELECTED_POST = "GET_SELECTED_POST",
	SET_SELECTED_POST = "SET_SELECTED_POST",

	SET_MY_POST_ERROR = "SET_MY_POST_ERROR",
	SEND_POST = "SEND_POST",
}
