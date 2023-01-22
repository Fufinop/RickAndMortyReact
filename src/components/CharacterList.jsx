import { useState, useEffect } from 'react';
import Character from './Character';
import NavPage from './NavPage';

function CharacterList() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`,
			);
			const data = await response.json();
			setLoading(false);
			setCharacters(data.results);
		}

		fetchData();
	}, [page]);

	if (loading) {
		return <h1 className=''>Loading...</h1>;
	}
	return (
		<div className='container mx-auto sm:px-4'>
			<NavPage page={page} setPage={setPage} />

			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className='flex flex-wrap'>
					{characters.map(character => {
						return (
							<div key={character.id} className='px-4 md:w-1/3'>
								<Character character={character} />
							</div>
						);
					})}
				</div>
			)}

			<NavPage page={page} setPage={setPage} />
		</div>
	);
}

export default CharacterList;
