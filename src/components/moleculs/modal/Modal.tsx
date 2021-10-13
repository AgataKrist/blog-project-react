import React, { useEffect, useState } from "react";
import s from "./Modal.module.css";
import cn from "classnames";

import ImageUploading, { ImageListType } from "react-images-uploading";
import { useDispatch } from "react-redux";
import { validateName } from "../../../helper";
import { sendPostAction } from "../../../core";
import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button/Button";
import { Textarea } from "../../atoms/textarea/Textarea";

interface IModal {
	active: boolean;
	setActive: (isOpen: boolean) => void;
	onModalClose: (isOpen: boolean) => void;
}

export const Modal = ({ active, setActive, onModalClose }: IModal) => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [lessonNum, setLessonNum] = useState("");
	const [images, setImages] = React.useState<ImageListType>([]);
	const dispatch = useDispatch();

	const isValidateTitile = validateName(title);
	const isValidateText = validateName(text);
	const isValidatelessonNum = (num: string) => {
		return num.length >= 1;
	};
	const isValid =
		isValidateTitile &&
		isValidateText &&
		isValidatelessonNum &&
		images.length;

	const onChange = (
		imageList: ImageListType,
		addUpdateIndex?: Array<number>
	) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	const sendData = () => {
		dispatch(
			sendPostAction({
				title,
				text,
				lesson_num: Number(lessonNum),
				image: images[0],
			})
		);
		onModalClose(false);
		setTitle("");
		setText("");
		setLessonNum("");
		setImages([]);
	};
	return (
		<div
			onClick={() => setActive(false)}
			className={cn(s.modal, { [s.active]: active })}
		>
			<div
				onClick={e => e.stopPropagation()}
				className={cn(s.modal__content, { [s.active]: active })}
			>
				<Input
					value={title}
					onChange={(text: string) => setTitle(text.trim())}
					isValid={isValidateTitile}
					label={"title"}
					type="text"
				/>
				<Textarea
					value={text}
					label={"text"}
					isValid={isValidateText}
					onChange={(text: string) => setText(text.trim())}
				/>
				<Input
					value={lessonNum}
					onChange={(text: string) => setLessonNum(text.trim())}
					isValid={isValidatelessonNum(lessonNum)}
					label={"lessonNum"}
					type="number"
				/>
				<ImageUploading
					multiple
					value={images}
					onChange={onChange}
					maxNumber={1}
					dataURLKey="data_url"
				>
					{({
						imageList,
						onImageUpload,
						onImageRemoveAll,
						onImageUpdate,
						onImageRemove,
						isDragging,
						dragProps,
					}) => (
						// write your building UI
						<div className={s.upload__image__wrapper}>
							{!images.length && (
								<button
									className={s.addIMG}
									style={
										isDragging
											? { color: "red" }
											: undefined
									}
									onClick={onImageUpload}
									{...dragProps}
								>
									Add image
								</button>
							)}
							&nbsp;
							{imageList.map((image, index) => (
								<div key={index} className="image-item">
									<img
										src={image["data_url"]}
										alt=""
										width="100"
										style={{
											marginBottom: "20px",
											border: "2px solid black",
										}}
									/>
									<div className={s.btn__wrapper}>
										<button
											className={s.remove_update}
											onClick={() => onImageUpdate(index)}
										>
											Update
										</button>
										<button
											className={s.remove_update}
											onClick={() => onImageRemove(index)}
										>
											Remove
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</ImageUploading>
				<Button
					disabled={!!!isValid}
					sendData={sendData}
					text={"add"}
				/>
			</div>
		</div>
	);
};
