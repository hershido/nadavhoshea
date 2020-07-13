import React from 'react';
import { motion } from 'framer-motion';

const imageVariants = {
	hover: {
		scale: 1.2,
		transition: { duration: 0.5 },
	},
};

const infoVariants = {
	hidden: {
		y: '100%',
	},
	hover: {
		y: 0,
		transition: { duration: 0.5 },
	},
};

export default function Album({ info }) {
	console.log('info ', info);

	return (
		<motion.div className='li-container' initial='hidden' whileHover='hover'>
			<motion.img variants={imageVariants} className='grid-img' src={info.imagePath} alt='1' />

			<motion.div variants={infoVariants} className='info' whileTap='hover'>
				<h3 className='info-heading'>
					{info.artist} - {info.album}
				</h3>
				<h4 className='info-description'>{info.description}</h4>
				<div className='icons'>
					{info.spotifyUrl && (
						<a href={info.spotifyUrl} target='blank'>
							<motion.i whileHover={{ scale: 1.2, color: '#1ED760' }} className='info-icon fab fa-spotify'></motion.i>
						</a>
					)}
					{info.youtubeUrl && (
						<a href={info.youtubeUrl} target='blank'>
							<motion.i whileHover={{ scale: 1.2, color: '#DE2825' }} className='info-icon fab fa-youtube'></motion.i>
						</a>
					)}
					{info.bandcampUrl && (
						<a href={info.bandcampUrl} target='blank'>
							<motion.i whileHover={{ scale: 1.2, color: '#61929C' }} className='info-icon fab fa-bandcamp'></motion.i>
						</a>
					)}
				</div>
			</motion.div>
		</motion.div>
	);
}
