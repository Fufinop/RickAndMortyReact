import PropTypes from 'prop-types';

function NavPage(props) {
	NavPage.propTypes = {
		page: PropTypes.number.isRequired,
		setPage: PropTypes.func.isRequired,
	};

	return (
		<div className='pb-8'>
			<header className='flex items-center justify-between'>
				<p>Page: {props.page}</p>
				<button
					className='inline-block select-none rounded border bg-blue-600 py-1 px-2 text-center align-middle text-xs font-normal leading-normal text-white no-underline  hover:bg-blue-600'
					onClick={() => props.setPage(props.page + 1)}
				>
					Page {props.page + 1}
				</button>
			</header>
		</div>
	);
}

export default NavPage;
