import { BaseService } from "./BaseService";

class UserAPIService extends BaseService {
	public async getUsers() {
		return this.get("/users");
	}

	public async deleteUser(id: number) {
		return this.remove(`users/${id}`);
	}
}

export const UserService = new UserAPIService();
