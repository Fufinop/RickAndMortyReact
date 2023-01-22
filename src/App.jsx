import CharacterList from './components/CharacterList';
import Footer from './components/Footer';

function App() {
	return (
		<div className='bg-zinc-900 text-white'>
			<h1 className='py-4 text-center text-7xl'>Rick and Morty</h1>
			<CharacterList />
			<Footer />
		</div>
	);
}

export default App;
