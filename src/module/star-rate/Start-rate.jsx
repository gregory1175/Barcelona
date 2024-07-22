import filledStar from '../../assets/Star.png';
import emptyStar from '../../assets/StarW.png';
import style from './Start-rate.module.scss';
const StarRating = ({ rating }) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(<img key={i} src={filledStar} alt='Filled Star' />);
		} else {
			stars.push(<img key={i} src={emptyStar} alt='Empty Star' />);
		}
	}
	return <div className={style.star__rate}>{stars}</div>;
};

export default StarRating;
