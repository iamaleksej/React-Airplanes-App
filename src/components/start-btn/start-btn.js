import React from 'react';

import './start-btn.sass';

export default class StartBtn extends React.Component {

	render() {
		return (
			<div className="start-btn">
				<div className="start-btn__item start-btn__top">START</div>
				<div className="start-btn__item start-btn__bottom">RANDOM SINGLE MISSION &#709;</div>
			</div>
		);
	};
};