import { useTheme } from '@/contexts/ThemeContext';

const ToggleTheme = () => {
	const theme = useTheme();

	function handleClick() {
		theme?.setTheme(theme?.theme === 'light' ? 'dark' : 'light');
		console.log('mudei para dark');
	}
	return (
		<button
			onClick={handleClick}
			className='bg-neutral-900 text-gray-50 px-2 py-2 rounded-md dark:bg-gray-100 dark:text-neutral-900'
		>
			{' '}
			mudar tema
		</button>
	);
};

export default ToggleTheme;
