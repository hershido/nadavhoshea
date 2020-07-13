import React, { useEffect, forwardRef } from 'react';

export default forwardRef(function Progress(props, ref) {
	const { onClick, trackTime, duration } = props;

	const progressPrecent = (trackTime / duration) * 100 + '%';

	const progStyle = {
		width: progressPrecent,
	};

	const ballStyle = {
		left: progressPrecent,
	};

	return (
		<div onClick={onClick} className='progress-bar' ref={ref}>
			<div className='inner-progress' style={progStyle}></div>
			<div className='ball' style={ballStyle}></div>
		</div>
	);
});
