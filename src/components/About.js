import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from './AnimationVariants';
import MusicPlayer from './Musicplayer/MusicPlayer';

export default function About() {
	return (
		<motion.div onLoad={window.scrollTo(0, 0)} className='about-container' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
			<h1 className='section-title'>Who Am I?</h1>
			<div className='about-inner'>
				<div className='about-body'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et natus earum qui magni dicta laborum quibusdam voluptas laudantium magnam ex, vitae ducimus reprehenderit ipsam placeat nulla alias commodi! Rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
					quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
				</div>
				<img className='profile-img' src='/images/profile.jpg' alt='' />
			</div>
		</motion.div>
	);
}
