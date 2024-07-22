import { useEffect } from 'react';
import style from './Card-popup.module.scss';

function CardPopup({ image, onClose }) {
	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [onClose]);

	const handleOutsideClick = (event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	return (
		<div className={style.popup} onClick={handleOutsideClick}>
			<div className={style.popup__content}>
				<img src={image} alt='Popup' className={style.popup__image} />
				<button className={style.popup__close} onClick={onClose}>
					X
				</button>
			</div>
		</div>
	);
}

export default CardPopup;
