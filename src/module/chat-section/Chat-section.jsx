import { useState } from 'react';
import style from './Chat-section.module.scss';
import UserChat from '../user-chat/User-chat';
import AdminChat from '../admin-chat/Admin-chat';

function ChatSection() {
	const [messages, setMessages] = useState([]);

	const sendMessage = (from, text) => {
		const newMessage = {
			from,
			text,
			userImage:
				from === 'user'
					? '../src/assets/UserTestPhoto.png'
					: '../src/assets/MoreUserPhoto.png',
			sendTime: new Date().toLocaleTimeString(),
		};
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	return (
		<div className={style.chat__section}>
			<div>
				<UserChat messages={messages} sendMessage={sendMessage} />
			</div>
			<div className={style.caht__separator}></div>
			<div>
				<AdminChat messages={messages} sendMessage={sendMessage} />
			</div>
		</div>
	);
}

export default ChatSection;
