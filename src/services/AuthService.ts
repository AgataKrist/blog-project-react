import { GuestService } from "./GuestService";

import { IUserAuth, IUserLoginAuth } from "../types/user";

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
}

export const AuthService = new AuthAPIService();
