export interface IUserAuth {
	username: string;
	password: string;
	email: string;
}
export interface IUserLoginAuth {
	password: string;
	email: string;
}
export interface IError {
	username: string | null;
	password: string | null;
	email: string | null;
}
export interface IInput {
	value: string;
	isValid: boolean;
}
export interface IActivationPayload {
	uid: string;
	token: string;
}
export interface IToken {
	refresh: string;
	access: string;
}
