'use client';
import Image from 'next/image';
import Header from '../components/Header';
import Container from '@/components/Container';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ToggleTheme from '@/components/ToggleTheme';
import ImagesFeatured from '@/components/ImagesFeatured';

export default function Home() {
	return (
		<ThemeProvider>
			<main className='my-20 px-4'>
				<ImagesFeatured />
			</main>

			<ToggleTheme />
		</ThemeProvider>
	);
}
