import React, { forwardRef } from 'react';

export default forwardRef(function Volume(props, ref) {
	const { onClick, volume, onMouseMove } = props;
	const volumePrecent = volume * 100 + '%';

	const volumeStyle = {
		width: volumePrecent,
	};

	const volumeBallStyle = {
		left: volumePrecent,
	};

	return (
		<div ref={ref} className='volume-bar' onClick={onClick}>
			<div className='inner-volume' style={volumeStyle}></div>
			<div className='volume-ball' style={volumeBallStyle}></div>
		</div>
	);
});
