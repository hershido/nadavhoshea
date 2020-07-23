import React from 'react';
import { motion } from 'framer-motion';
import Album from './Album';
import albumList from './AlbumList';
import { containerVariants } from './AnimationVariants';



export default function Home() {
	return (
		<motion.div onLoad={window.scrollTo(0, 0)} className='home-container' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
		{/* Grid Container for the album components */}
			<div className='grid-container'>
				{albumList.map(album => {
					return <Album info={album} />;
				})}
			</div>
		</motion.div>
	);
}
