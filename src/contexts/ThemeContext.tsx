import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

const STORAGE_KEY = 'themeContextKey';

type ThemeContext = {
	theme: string;
	setTheme: (t: string) => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

type Props = {
	children: ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState(
		window.localStorage.getItem(STORAGE_KEY) || 'light'
	);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		window.localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(ThemeContext);
};
