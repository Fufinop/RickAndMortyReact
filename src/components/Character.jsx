import PropTypes from 'prop-types';

function Character({ character }) {
	Character.propTypes = {
		character: PropTypes.shape({
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			origin: PropTypes.string.isRequired,
		}).isRequired,
	};

	return (
		<div className='p-5 text-center'>
			<h2>{character.name}</h2>
			<img
				className='h-auto max-w-full rounded-full py-2 px-4'
				src={character.image}
				alt={character.name}
			/>
			<p>{character.origin.name}</p>
		</div>
	);
}

export default Character;
