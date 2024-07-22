import style from './Message.module.scss';

function Message({ userImage, text, sendTime }) {
	return (
		<div className={style.message__container}>
			<img className={style.message__image} src={userImage} alt='user' />
			<div>
				<p className={style.message__mymessage}>{text}</p>
				<p className={style.message__time}>{sendTime}</p>
			</div>
		</div>
	);
}

export default Message;
