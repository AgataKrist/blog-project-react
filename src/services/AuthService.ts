import { GuestService } from "./GuestService";

import { IUserAuth, IUserEmail, IUserLoginAuth } from "../types/user";

class AuthAPIService extends GuestService {
	public async registration(profile: IUserAuth) {
		return this.post("users/", profile);
	}

	public async login(profile: IUserLoginAuth) {
		return this.post("jwt/create/", profile);
	}

	public async activateUser(activationPayload: any) {
		return this.post("users/activation/", activationPayload);
	}

	public async getUserDate(id: any) {
		return this.get(`users/${id}`);
	}
	public async getResetPasswordDate(email: IUserEmail) {
		return this.post("users/reset_password/", email);
	}
	public async resetPasswordConfirm(activationPayload: any) {
		return this.post("users/reset_password_confirm/", activationPayload);
	}
}

export const AuthService = new AuthAPIService();
