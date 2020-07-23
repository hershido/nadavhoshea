import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';


// CSS Imports
import './App.css';
import './components/ComponentCss/Home.css';
import './components/ComponentCss/About.css';
import './components/ComponentCss/Contact.css';
import './components/ComponentCss/Footer.css';


// Component Imports
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';

//Import Framer Motion
import {AnimatePresence} from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<div className='app'>

			{/* Top Header Component */}
			<TopHeader />



			<div className='section' key={location.key}>
			{/* React Router */}
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
				{/* Footer Component */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
