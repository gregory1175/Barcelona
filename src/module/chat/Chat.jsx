import style from './Chat.module.scss';
import StarRating from '../star-rate/Start-rate';
import Message from '../message/Message';

function Chat({
	headerImage,
	headerTitle,
	headerInfo,
	headerRate,
	messages = [],
	footerImage,
	messageInput,
	setMessageInput,
	sendButton,
	titleImage,
	sendButtonImage,
}) {
	const handleKeyPress = (event) => {
		if (event.key === 'Enter' && messageInput.trim() !== '') {
			sendButton();
		}
	};

	return (
		<div className={style.chat}>
			<section className={style.chat__container}>
				<div className={style.chat__header_container}>
					<img
						className={style.chat__header_image}
						src={headerImage}
						alt='header'
					/>
					<div className={style.chat__header_container_title}>
						<h2 className={style.chat__header_title}>{headerTitle}</h2>
						<div className={style.chat__header_container_description}>
							{titleImage && (
								<img
									className={style.chat__header_image_description}
									src={titleImage}
								/>
							)}
							<p className={style.chat__header_info}>{headerInfo}</p>
						</div>
					</div>
					{headerRate && <StarRating rating={headerRate} />}
				</div>
				<div className={style.chat__message_container}>
					{messages.map((msg, index) => (
						<Message
							key={index}
							userImage={msg.userImage}
							text={msg.text}
							sendTime={msg.sendTime}
						/>
					))}
				</div>
				<div className={style.chat__footer_container}>
					<img
						className={style.chat__footer_user_image}
						src={footerImage}
						alt='footer'
					/>
					<input
						placeholder='Напишите сообщение...'
						className={style.chat__footer_message}
						value={messageInput}
						onChange={(e) => setMessageInput(e.target.value)}
						onKeyDown={handleKeyPress}
					/>
					<button
						className={style.chat__footer_send_message_button}
						onClick={sendButton}>
						<img
							className={style.chat__footer_send_button_image}
							src={sendButtonImage}
							alt='Send'
						/>
					</button>
				</div>
			</section>
		</div>
	);
}

export default Chat;
