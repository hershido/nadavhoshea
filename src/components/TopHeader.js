import React from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import './ComponentCss/TopHeader.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import MusicPlayer from '../components/Musicplayer/MusicPlayer';

const topContainerVariants = {
	hidden: {
		opacity: 0,
	},

	visible: {
		opacity: 1,
		transition: { duration: 1 },
	},
};

const dropdownVariants = {
	hidden: {
		x: '150vw',
	},
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const hrVariants = {
	hidden: {
		x: '-100vw',
	},

	visible: {
		x: 0,
		transition: {
			transition: 'tween',
			ease: 'easeOut',
			duration: 0.5,
			delay: 1,
		},
	},
};

const noteVariants = {
	hidden: {
		y: '-30vh',
	},

	visible: {
		y: 0,
		transition: {
			type: 'spring',
			duration: 0.5,
			delay: 3,
		},
	},
};

const navbarVariants = {
	hidden: {
		x: '100vw',
	},

	visible: {
		x: 0,
		transition: {
			type: 'spring',
			duration: 0.5,
			delay: 2,
		},
	},
};

export default function TopHeader() {
	const [burgerToggle, setBurgerToggle] = useState(false);

	function handleBurgerClick() {
		setBurgerToggle(!burgerToggle);
	}

	return (
		<motion.div variants={topContainerVariants} initial='hidden' animate='visible'>
			<div className='top-container'>
				<MusicPlayer />

				<div className='inner-topheader'>
					<motion.div variants={navbarVariants} className='nav-bar'>
						<motion.div whileHover={{ scale: 1.1 }}>
							<Link to='/'>
								<span className='nav-bar-item'>Home</span>
							</Link>
						</motion.div>
						<motion.div whileHover={{ scale: 1.1 }}>
							<Link to='/about'>
								<span className='nav-bar-item'>About</span>
							</Link>
						</motion.div>
						<motion.div whileHover={{ scale: 1.1 }}>
							<Link to='/contact'>
								<span className='nav-bar-item'>Contact</span>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div variants={hrVariants} className='hr1'></motion.div>
					<motion.div variants={hrVariants} className='hr1 second'></motion.div>
					<div className='logo-box'>
						<div className='logo-header'>
							<Logo />
						</div>
						<motion.div variants={noteVariants} className='logo-footnote'>
							Musician - Producer - Mixer
						</motion.div>
					</div>
					<svg onClick={handleBurgerClick} className='burger' width='50' height='50' viewBox='0 0 256 247' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g filter='url(#filter0_d)'>
							<rect x='4.5' y='0.5' width='247' height='238' rx='53.5' stroke='white' />
						</g>
						<rect x='58' y='48' width='145' height='22' rx='11' fill='#F2F2F2' />
						<rect x='58' y='108' width='145' height='22' rx='11' fill='#F2F2F2' />
						<rect x='58' y='168' width='145' height='22' rx='11' fill='#F2F2F2' />
						<defs>
							<filter id='filter0_d' x='0' y='0' width='256' height='247' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
								<feFlood flood-opacity='0' result='BackgroundImageFix' />
								<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
								<feOffset dy='4' />
								<feGaussianBlur stdDeviation='2' />
								<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
								<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
								<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
							</filter>
						</defs>
					</svg>
				</div>

				<AnimatePresence>
					{burgerToggle && (
						<motion.div initial={{ x: '150vw' }} animate={{ x: '0' }} exit={{ x: '150vw' }} transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }} className='dropdown'>
							<motion.div whileHover={{ scale: 1.1 }}>
								<Link onClick={handleBurgerClick} to='/'>
									<span className='nav-bar-item'>Home</span>
								</Link>
							</motion.div>
							<motion.div whileHover={{ scale: 1.1 }}>
								<Link onClick={handleBurgerClick} to='/about'>
									<span className='nav-bar-item'>About</span>
								</Link>
							</motion.div>
							<motion.div whileHover={{ scale: 1.1 }}>
								<Link onClick={handleBurgerClick} to='/contact'>
									<span className='nav-bar-item'>Contact</span>
								</Link>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}
