import React from 'react';
import style from '../image/Image-card.module.scss';

function Image({ images, onImageClick }) {
	const maxImagesToShow = 4;
	const displayedImages = images.slice(0, maxImagesToShow);
	const remainingImagesCount = images.length - maxImagesToShow;

	return (
		<div className={style.image__container}>
			{displayedImages.map((image, index) => (
				<div className={style.image__wrapper} key={index}>
					<img
						src={image}
						alt={`Image ${index + 1}`}
						className={style.image}
						onClick={() => onImageClick(image)}
					/>
					{remainingImagesCount > 0 && index === maxImagesToShow - 1 && (
						<div className={style.image__remaining}>
							+{remainingImagesCount}
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default Image;
