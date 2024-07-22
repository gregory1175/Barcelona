import { useState, useEffect, useRef } from 'react';
import UserPost from '../user-post/User-post';
import CardPopup from '../card-popup/Card-popup';
import style from './Card.module.scss';
import slideData from '../../data/sliderData';

function Card() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [popupOpen, setPopupOpen] = useState(false);
	const [popupImage, setPopupImage] = useState('');

	const totalSlides = slideData.length;
	const slidesPerPage = 3;
	const slideWidth = 300;
	const slideMargin = 20;
	const extraOffset = 130;
	const sliderRef = useRef(null);

	const nextSlide = () => {
		if (currentIndex < totalSlides - slidesPerPage) {
			setCurrentIndex(currentIndex + 1);
		} else if (currentIndex === totalSlides - slidesPerPage) {
			setCurrentIndex(totalSlides - slidesPerPage + 1);
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const goToSlide = (index) => {
		const isLastSlide = (index + 1) * slidesPerPage >= totalSlides;
		setCurrentIndex(
			isLastSlide ? totalSlides - slidesPerPage + 1 : index * slidesPerPage
		);
	};

	const handleImageClick = (image) => {
		setPopupImage(image);
		setPopupOpen(true);
	};

	useEffect(() => {
		const slider = sliderRef.current;
		const maxOffset =
			(totalSlides - slidesPerPage) * (slideWidth + slideMargin);
		const offset =
			currentIndex > totalSlides - slidesPerPage
				? Math.min(
						(totalSlides - slidesPerPage) * (slideWidth + slideMargin) +
							extraOffset,
						maxOffset + extraOffset
					)
				: currentIndex * (slideWidth + slideMargin);
		slider.style.transform = `translateX(-${offset}px)`;
	}, [
		currentIndex,
		totalSlides,
		slidesPerPage,
		slideWidth,
		slideMargin,
		extraOffset,
	]);

	const sliderWidth = `calc((300px + 20px) * ${totalSlides} - 20px)`;

	return (
		<section className={style.card}>
			<div className={style.card__container}>
				<h2 className={style.card__title}>Отзывы о Барселоне</h2>
				<section className={style.card__slider_container}>
					<div className={style.card__slider_wrapper}>
						<div
							className={style.card__slider}
							ref={sliderRef}
							style={{ width: sliderWidth }}>
							{slideData.map((slide, index) => (
								<UserPost
									key={index}
									{...slide}
									onImageClick={handleImageClick}
								/>
							))}
						</div>
					</div>
					{currentIndex > 0 && (
						<button
							className={`${style.card__arrow} ${style.card__arrow_left}`}
							onClick={prevSlide}>
							←
						</button>
					)}
					{currentIndex <= totalSlides - slidesPerPage && (
						<button
							className={`${style.card__arrow} ${style.card__arrow_right}`}
							onClick={nextSlide}>
							→
						</button>
					)}
				</section>
				<div className={style.card__footer_container}>
					<button className={style.card__all_reviews_button}>Все отзывы</button>
					<div className={style.card__dots}>
						{Array.from({ length: Math.ceil(totalSlides / slidesPerPage) }).map(
							(_, index) => (
								<div
									key={index}
									className={`${style.card__dot} ${
										index === Math.floor(currentIndex / slidesPerPage)
											? style.card__dot_active
											: ''
									}`}
									onClick={() => goToSlide(index)}
								/>
							)
						)}
					</div>
				</div>
			</div>
			{popupOpen && (
				<CardPopup image={popupImage} onClose={() => setPopupOpen(false)} />
			)}
		</section>
	);
}

export default Card;
