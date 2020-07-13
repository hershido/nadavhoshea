import React, { useEffect } from 'react';
import './MusicPlayer.css';
import { useRef, useState } from 'react';
import songList from './SongList';
import Progress from './Progress';
import Volume from './Volume';
import { motion } from 'framer-motion';

function MusicPlayer() {
	// State
	// *****

	// set a ref for the html <audio> tag
	const audioRef = useRef();
	//set a ref for the progress bar
	const progressRef = useRef();
	//set a ref for the Volume bar
	const volumeRef = useRef();
	//track state -> set the currently playing track
	const [currentTrack, setCurrentTrack] = useState(0);
	// set the player volume
	const [volume, setVolume] = useState(1);
	//sets the current track time - sent as a prop to the progress component
	const [trackTime, setTrackTime] = useState(0);
	const [displayTime, setDisplayTime] = useState({
		minutes: 0,
		seconds: 0,
	});
	const [displayDuration, setDisplayDuration] = useState({
		minutes: 0,
		seconds: 0,
	});
	//when the progressBall is mousedown, this sets to true
	const [progressBallClicked, setProgressBallClicked] = useState(false);
	//when the volumeBall is mousedown, this sets to true
	const [volumeMouseDown, setVolumeMouseDown] = useState(false);
	const [playing, setPlaying] = useState(false);

	//every time the audio's time updates this function sets trackTime state to the current time of the track
	function updateTime() {
		setTrackTime(audioRef.current.currentTime);
		setDisplayTime({
			minutes: Math.floor(trackTime / 60),
			seconds: Math.floor(trackTime % 60),
		});

		updateDurationDisplay();
	}

	function updateDurationDisplay() {
		const minutes = Math.floor(audioRef.current.duration / 60);
		const seconds = Math.floor(audioRef.current.duration % 60);
		setDisplayDuration({
			minutes: minutes,
			seconds: seconds,
		});
	}

	//BUTTON CONTROLS
	//******************************************************************************** */
	//plays current track
	function handlePlay(p) {
		audioRef.current.play();
	}

	//pauses current track
	function handlePause(p) {
		audioRef.current.pause();
	}

	//prev track
	async function handlePrev() {
		if (currentTrack > 0) {
			await setCurrentTrack(currentTrack - 1);

			handlePlay();
		}
	}

	//next track
	async function handleNext() {
		if (currentTrack < songList.length - 1) {
			await setCurrentTrack(currentTrack + 1);
			handlePlay();
		}
	}

	//******************************************************************************** */

	// PROGRESS BAR CONTROLS
	//******************************************************************************** */

	// handles a single click on the grey progress bar, clickTime is calculated and set to the current track time
	function handleProgressClick(e) {
		const clickedTime = ((e.clientX - progressRef.current.offsetLeft) / progressRef.current.offsetWidth) * audioRef.current.duration;
		audioRef.current.currentTime = clickedTime;
	}

	//if the progressBall is clicked moveTime is calculated and set to the current track time
	function onProgressMove(e) {
		if (!progressBallClicked || !progressRef.current) return;
		e.preventDefault();
		const moveTime = ((e.clientX - progressRef.current.offsetLeft) / progressRef.current.offsetWidth) * audioRef.current.duration;
		console.log('moveTime', moveTime);
		audioRef.current.currentTime = moveTime;
	}

	// sets state when progressBall is mouseDown
	function progressBallMouseDown() {
		setProgressBallClicked(true);
		audioRef.current.pause();
	}

	// sets state when progressBall is mouseUp
	function progressBallMouseUp() {
		setProgressBallClicked(false);
		audioRef.current.play();
	}

	// sets state when progressBall is mouseUp
	function progressBallMouseLeave() {
		setProgressBallClicked(false);
	}

	//Listens for mouseup event on the progressRef.current and invoked onBallup function,
	//this is because we want

	useEffect(() => {
		progressRef.current.addEventListener('mousedown', progressBallMouseDown);
		return () => progressRef.current.removeEventListener('mousedown', progressBallMouseDown);
	});

	//Listens for mousemovement events on the progressRef.current and invokes onProgressMove function
	useEffect(() => {
		progressRef.current.addEventListener('mousemove', onProgressMove);
		return () => progressRef.current.removeEventListener('mousemove', onProgressMove);
	});

	useEffect(() => {
		progressRef.current.addEventListener('mouseup', progressBallMouseUp);
		return () => progressRef.current.removeEventListener('mouseup', progressBallMouseUp);
	});

	useEffect(() => {
		progressRef.current.addEventListener('mouseleave', progressBallMouseLeave);
		return () => progressRef.current.removeEventListener('mouseleave', progressBallMouseLeave);
	});

	//******************************************************************************** */
	// VOLUME CONTROLS
	//******************************************************************************** */

	// Handles a click on the volume bar itself
	function handleVolumeClick(e) {
		e.preventDefault();
		const clickedVolume = (e.clientX - volumeRef.current.offsetLeft) / volumeRef.current.offsetWidth;
		if (clickedVolume >= 0 && clickedVolume <= 1) {
			audioRef.current.volume = clickedVolume;
			setVolume(clickedVolume);
		}
	}

	function handleMute() {
		audioRef.current.volume = 0;
		setVolume(0);
	}

	function handleFull() {
		audioRef.current.volume = 1;
		setVolume(1);
	}

	// Handles draging of the volume ball

	function volumeBallMouseMove(e) {
		if (volumeMouseDown) {
			e.preventDefault();
			const moveVolume = (e.clientX - volumeRef.current.offsetLeft) / volumeRef.current.offsetWidth;

			if (moveVolume >= 0 && moveVolume <= 1) {
				audioRef.current.volume = moveVolume;
				setVolume(moveVolume);
			}
		}
	}

	//Handles volume ball mousedown
	function volumeBallMouseDown() {
		setVolumeMouseDown(true);
	}

	//Handles volume ball mouseup
	function volumeBallMouseUp() {
		setVolumeMouseDown(false);
	}

	//Handles volume ball mouseleave
	function volumeBallMouseLeave() {
		setVolumeMouseDown(false);
	}

	//Volume Ball Event Listeners

	useEffect(() => {
		volumeRef.current.addEventListener('mousedown', volumeBallMouseDown);
		return () => {
			volumeRef.current.removeEventListener('mousedown', volumeBallMouseDown);
		};
	});

	useEffect(() => {
		volumeRef.current.addEventListener('mouseup', volumeBallMouseUp);
		return () => {
			volumeRef.current.removeEventListener('mousedown', volumeBallMouseUp);
		};
	});

	useEffect(() => {
		volumeRef.current.addEventListener('mousemove', volumeBallMouseMove);
		return () => {
			volumeRef.current.removeEventListener('mousemove', volumeBallMouseMove);
		};
	});

	useEffect(() => {
		volumeRef.current.addEventListener('mouseleave', volumeBallMouseLeave);
		return () => {
			volumeRef.current.removeEventListener('mouseleave', volumeBallMouseLeave);
		};
	});

	//******************************************************************************** */
	// RENDER
	//******************************************************************************** */

	return (
		<div className='music-player'>
			<div className='audio-container'>
				<audio onTimeUpdate={updateTime} ref={audioRef} src={songList[currentTrack].path}></audio>
			</div>
			<span className='song-title'>
				Track: {songList[currentTrack].artist} - {songList[currentTrack].songTitle}{' '}
			</span>
			<div className='player-controls'>
				<span onClick={handlePlay} className='btn'>
					<i class='control fas fa-play'></i>
				</span>
				<span onClick={handlePause} className='btn'>
					<i class='control fas fa-pause'></i>
				</span>
				<span onClick={handlePrev} className='btn'>
					<i class='control fas fa-step-backward'></i>
				</span>
				<span onClick={handleNext} className='btn'>
					<i class='control fas fa-step-forward'></i>
				</span>
			</div>
			<br></br>

			<span className='current-time'>
				{('0' + displayTime.minutes.toString()).slice(-2)}:{('0' + displayTime.seconds.toString()).slice(-2)}
			</span>
			<Progress ref={progressRef} onClick={handleProgressClick} trackTime={trackTime} duration={audioRef.current && audioRef.current.duration} />
			<span className='duration'>
				{('0' + displayDuration.minutes.toString()).slice(-2)}:{('0' + displayDuration.seconds.toString()).slice(-2)}
			</span>
			<i onClick={handleMute} class='fas fa-volume-mute'></i>

			<Volume ref={volumeRef} onClick={handleVolumeClick} volume={volume} />
			<i onClick={handleFull} class='fas fa-volume-up'></i>
		</div>
	);

	//******************************************************************************** */
}

export default MusicPlayer;
