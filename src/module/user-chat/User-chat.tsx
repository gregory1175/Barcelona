import React, { useState } from 'react';
import Chat from '../chat/Chat';

function UserChat({ messages, sendMessage }) {
	const [messageInput, setMessageInput] = useState('');

	const handleSendMessage = () => {
		if (messageInput.trim()) {
			sendMessage('user', messageInput);
			setMessageInput('');
		}
	};

	return (
		<Chat
			headerImage='../../src/assets/UserTestPhoto.png'
			headerTitle='Наталия Полянская'
			headerInfo='Гид по Баварии, фотограф'
			headerRate={4}
			messages={messages}
			footerImage='../../src/assets/UserTestPhoto.png'
			messageInput={messageInput}
			setMessageInput={setMessageInput}
			sendButton={handleSendMessage}
			titleImage='../../src/assets/flag.jpg'
			sendButtonImage='../../src/assets/Icon.svg'
		/>
	);
}

export default UserChat;
