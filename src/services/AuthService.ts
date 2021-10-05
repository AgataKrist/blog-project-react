import { BaseService } from "./BaseService";

import { IUserAuth, IActivationPayload, IUserLoginAuth } from "../types/user";

class AuthAPIService extends BaseService {
	private storage: Storage;

	private contentType = {
		"Content-Type": "application/json",
	};

	constructor() {
		super();
		this.storage = localStorage;
	}

	// public setTokens({ access_token, refresh_token, token_type }: any) {
	//   this.storage.setItem("access_token", access_token);
	//   this.storage.setItem("refresh_token", refresh_token);
	//   this.storage.setItem("token_type", token_type);
	// }

	// public removeTokens() {
	//   this.storage.removeItem("refresh_token");
	//   this.storage.removeItem("access_token");
	//   this.storage.removeItem("token_type");
	// }

	// public removeAccessToken() {
	//   this.storage.removeItem("access_token");
	//   this.storage.removeItem("token_type");
	// }

	// public getRefreshToken() {
	//   return this.storage.getItem("refresh_token") || "";
	// }

	// public getAccessToken() {
	//   return this.storage.getItem("access_token") || "";
	// }

	// public getTokenType() {
	//   const tokenType = this.storage.getItem("token_type") || "";
	//   if (tokenType) return tokenType[0].toUpperCase() + tokenType.slice(1);
	// }

	// public async signUp(profile: IUserAuth) {
	//   const data = await this.post<any>(`auth​/users​/`, JSON.stringify(profile));

	//   return data;
	// }

	public async registration(profile: IUserAuth) {
		return this.post("users/", profile);
	}
	// public async login(profile: IUserLoginAuth) {
	// 	return this.post("jwt​/create​/", profile);
	// }
	public async login(profile: IUserLoginAuth) {
		return this.post("jwt/create/", profile);
	}
	// public async activateUser(activationPayload: IUserAuth) {
	// 	return this.post("users/", profile);
	// }

	// public async activateUser(activationPayload: IActivationPayload) {
	// 	return this.post("​/users​/activation​/", activationPayload);
	// }

	public async activateUser(activationPayload: IActivationPayload) {
		return this.post("users/activation/", activationPayload);
	}

	public async getUsers() {
		return this.get("users/");
	}

	public async deleteUser(id: number) {
		return this.remove(`users/${id}`);
	}
}

export const AuthService = new AuthAPIService();
