import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import './App.css';
import './components/ComponentCss/Home.css';
import './components/ComponentCss/About.css';
import './components/ComponentCss/Contact.css';
import './components/ComponentCss/Footer.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './components/Logo';
import MusicPlayer from './components/Musicplayer/MusicPlayer';
function App() {
	const location = useLocation();
	useEffect(() => {
		window.getSelection().removeAllRanges();
	}, []);
	return (
		<div className='app'>
			<TopHeader />

			{/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='bg-container'>
				<img className='bg-img' src='/images/5.png' alt='' />
			</motion.div> */}

			<div className='section' key={location.key}>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.key}>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</AnimatePresence>

				<Footer />
			</div>
		</div>
	);
}

export default App;
