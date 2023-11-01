'use client';
import Image from 'next/image';
import Header from '../components/Header';
import Container from '@/components/Container';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ToggleTheme from '@/components/ToggleTheme';
import ImagesFeatured from '@/components/ImagesFeatured';
import AreaButtons from '@/components/AreaButtons';
import { photos } from '@/data/photos';

export default function Home() {
	const imageList = photos.slice(0, 12);
	return (
		<ThemeProvider>
			<main className='my-20 px-4 flex flex-col justify-center'>
				<ImagesFeatured />
				<AreaButtons />

				<div className='mx-auto mt-6'>
					<ToggleTheme />
				</div>

				<div className='grid grid-cols-3 gap-2 gap-x-2 w-full max-w-[396px] mx-auto mt-12'>
					{imageList.map((image) => (
						<div
							className='w-[126px] h-[109px] relative grayscale'
							key={image.id}
						>
							<Image
								src={image.url}
								alt={image.description}
								fill
								objectFit='cover'
							/>
						</div>
					))}
				</div>
			</main>
		</ThemeProvider>
	);
}
