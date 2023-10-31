import Image from 'next/image';
import { photos } from '../data/photos';

const ImagesFeatured = () => {
	const listPhotosFeatured = photos.filter((photo) => photo.isMain === true);

	return (
		<div className='w-full'>
			<div className='flex gap-4 relative justify-center'>
				{listPhotosFeatured.map((photo) => (
					<div
						className='rounded-full w-28 h-28 relative overflow-hidden grayscale'
						key={photo.id}
					>
						<Image
							src={photo.url}
							alt={photo.description}
							fill={true}
							objectFit='cover'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImagesFeatured;
