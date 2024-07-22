import Image from '../image/Image-card';
import style from './User-post.module.scss';

function UserPost({
	title,
	titleAbout,
	imageSrc,
	description,
	authorName,
	altText,
	date,
	comments,
	likes,
	images,
	onImageClick,
}) {
	return (
		<div className={style.card}>
			<section className={style.card__container}>
				<div className={style.card__title_container}>
					<img className={style.card__image} src={imageSrc} alt={altText} />
					<h3 className={style.card__title_author}>{authorName}</h3>
				</div>
				<div className={style.card__about_title_container}>
					<h2 className={style.card__about_title}>{title}</h2>
					<p className={style.card__about_description}>{titleAbout}</p>
				</div>
				<p className={style.card__description}>{description}</p>
				<Image images={images} onImageClick={onImageClick} />
				<div className={style.card__footer_container}>
					<p className={style.card__date}>{date}</p>
					<p className={style.card__comments}>{comments} комментариев</p>
					<img
						src='../../src/assets/likeImage.png'
						className={style.card__like_image}
					/>
					<p className={style.card__likes}>{likes}</p>
				</div>
			</section>
		</div>
	);
}

export default UserPost;
