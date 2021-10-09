import React, { useState } from 'react';
import AirplanesItem from '../airplanes-item';

import './airplanes.sass';


const Airplanes = ({ airplanes, onFoneChange }) => {

	const [overlay, setOverlay] = useState(null);

	const airplanesItems = airplanes.map((item) => {

		const { id } = item;
		return (
			<AirplanesItem
				key={id}
				{...item}
				onFoneChange={(e) => onFoneChange(e)}
				isOverlay={overlay === id}
				setOverlay={() => setOverlay(id)}
			/>
		);

	});

	return (
		<div className="airplanes_wrapper">
			<ul className="airplanes">
				{airplanesItems}
			</ul>
		</div>
	);

};


export default Airplanes;
