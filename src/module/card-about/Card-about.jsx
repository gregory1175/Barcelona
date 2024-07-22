import styles from './Card-about.module.scss';

function CardAbout({ title, imageSrc, description, linkText, altText }) {
	return (
		<div className={styles.card}>
			<img src={imageSrc} alt={altText} className={styles.card__image} />
			<div className={styles.card__content}>
				<h2 className={styles.card__title}>{title}</h2>
				<p className={styles.card__description}>{description}</p>
				<a href='#' className={styles.card__link}>
					{linkText}
				</a>
			</div>
		</div>
	);
}

export default CardAbout;
