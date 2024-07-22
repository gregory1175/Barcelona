import { useState } from 'react';
import Chat from '../chat/Chat';

function AdminChat({ messages, sendMessage }) {
	const [messageInput, setMessageInput] = useState('');

	const handleSendMessage = () => {
		if (messageInput.trim()) {
			sendMessage('admin', messageInput);
			setMessageInput('');
		}
	};

	return (
		<Chat
			headerImage='../../src/assets/MoreUserPhoto.png'
			headerTitle='Администратор'
			headerInfo='TravelAsk'
			messages={messages}
			footerImage='../../src/assets/MoreUserPhoto.png'
			messageInput={messageInput}
			setMessageInput={setMessageInput}
			sendButton={handleSendMessage}
			sendButtonImage='../../src/assets/Icon.svg'
		/>
	);
}

export default AdminChat;
