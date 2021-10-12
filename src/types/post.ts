import { ImageType } from "react-images-uploading";

export interface IPost {
	id: number;
	image: string;
	text: string;
	date: string;
	lesson_num: number;
	title: string;
	author: number;
}
export interface IPostRequest {
	count: number;
	next: null | string;
	previos: null | string;
	results: IPost[];
}
export interface IMyPostRequest {
	data: IPost[];
}
export interface ISelectedPost {
	payload: number;
}
export interface IPostSendRequest {
	image: ImageType;
	text: string;
	lesson_num: number;
	title: string;
}
