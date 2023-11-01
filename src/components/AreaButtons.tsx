import DarkMode from './DarkMode/DarkMode';

const AreaButtons = () => {
	return (
		<div className='mt-8 flex flex-col items-center '>
			<h2>Experience Photography !</h2>
			<div className='mt-9 flex gap-2'>
				<button className='border border-neutral-600 rounded-full px-11'>
					Following
				</button>
				<button className='border border-neutral-600 rounded-full px-11'>
					Messages
				</button>
			</div>
		</div>
	);
};

export default AreaButtons;
