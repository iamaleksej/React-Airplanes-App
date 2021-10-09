import React from 'react';

import './dropdown.sass';


const Dropdown = ({ item }) => {

	return (
		<ul className="dd-list">
			{item.values.map(el => (
				<li className="dd-list__item" key={el.value} >
					{el.image && (
						<div className="dd-list__icon"><img src={el.image} alt={item.image} /></div>
					)}

					<p className="dd-list__text">{el.value}</p>
				</li>
			))}
		</ul>
	);

};


export default Dropdown;
