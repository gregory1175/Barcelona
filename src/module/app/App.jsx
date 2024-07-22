import imageSrc from '../../assets/CardAboutImage.jpg';
import CardAbout from '../card-about/Card-about';
import Card from '../card/Card';
import ChatSection from '../chat-section/Chat-section';

function App() {
	return (
		<>
			<CardAbout
				imageSrc={imageSrc}
				altText='Описание новой картинки'
				title='Барселона — обзор города'
				description='Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
                многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом,
                в котором...'
				linkText='Читать дальше'
			/>
			<Card />
			<ChatSection />
		</>
	);
}

export default App;
