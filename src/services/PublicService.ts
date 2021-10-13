import { GuestService } from "./GuestService";

class PublicAPIService extends GuestService {
	public async getPosts() {
		return this.get("posts/?limit=50");
	}
	public async getSelectedPost(id: any) {
		return this.get(`posts/${id}`);
	}
}

export const PublicService = new PublicAPIService();
