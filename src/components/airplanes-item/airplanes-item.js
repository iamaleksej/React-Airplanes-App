import React from 'react';

import './airplanes-item.sass';


const AirplanesItem = ({ image, name, onFoneChange, id, setOverlay, isOverlay }) => {

	return (
		<div
			className="airplanes__item"

			onClick={(e) => {
				setOverlay(id);
				onFoneChange(e)
			}}
		>
			<div className="airplanes__image">
				<img
					className="image"
					src={image}
					alt={image}
				/>
				<div className={isOverlay ? '' : 'overlay'}></div>
			</div>
			<div className="airplanes__name">
				{name}
			</div>
		</div >

	);


};


export default AirplanesItem;