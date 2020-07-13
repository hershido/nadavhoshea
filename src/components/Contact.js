import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from './AnimationVariants';

export default function Contact() {
	return (
		<motion.div onLoad={window.scrollTo(0, 0)} className='contact-container' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
			<div className='contact-heading'>LET'S TALK</div>
		</motion.div>
	);
}
