import React from 'react';

import AppFone from '../app-fone';
import AppHeader from '../app-header';
import Airplanes from '../airplanes';
import './app.sass';
import air1 from '../../img/air-1.png';
import air2 from '../../img/air-2.png';
import air3 from '../../img/air-1.png';
import air4 from '../../img/air-3.png';
import air5 from '../../img/air-2.png';
import air6 from '../../img/air-3.png';
import air7 from '../../img/air-2.png';
import profileDataImg1 from '../../img/rank.png';
import profileDataImg2 from '../../img/login-1.png';
import profileDataImg3 from '../../img/login-2.png';
import profileDataImg4 from '../../img/login-3.png';
import menuTab1Img1 from '../../img/1.png';
import menuTab1Img2 from '../../img/2.png';
import menuTab1Img3 from '../../img/3.png';
import menuTab1Img4 from '../../img/4.png';
import bg from '../../img/bg.png';

const airplanesElements = [
	{ image: air1, name: 'Hawk', id: 1 },
	{ image: air2, name: 'Mirage 2000C', id: 2 },
	{ image: air3, name: 'Yak-52', id: 3 },
	{ image: air4, name: 'F/A-18C', id: 4 },
	{ image: air5, name: 'C-101 Aviojet', id: 5 },
	{ image: air6, name: 'MiG-15', id: 6 },
	{ image: air7, name: 'L-39C', id: 7 }
];
const menuTabs = [
	{
		'id': 1,
		'title': 'MAC',
		'subtitle': 'MODERN AIR COMBAT',
		'values': [
			{ image: menuTab1Img1, value: 'Game options', id: 1 },
			{ image: menuTab1Img2, value: 'Encyclopedia', id: 2 },
			{ image: menuTab1Img3, value: 'Shop', id: 3 },
			{ image: menuTab1Img4, value: 'Exit', id: 4 }
		]
	},
	{
		'id': 2,
		'title': 'FL',
		'values': [
			{ value: 'FL Text 1', id: 1 },
			{ value: 'FL Text 2', id: 2 }
		]
	},
	{
		'id': 3,
		'title': 'DCS',
		'values': [
			{ value: 'DCS Text 1', id: 1 },
			{ value: 'DCS Text 2', id: 2 },
			{ value: 'DCS Text 3', id: 3 }
		]
	}
];

const profileData = [
	{ image: profileDataImg1, value: 'Login user', id: 1 },
	{ image: profileDataImg2, value: 'Logbook', id: 2 },
	{ image: profileDataImg3, value: 'Setup aircraft', id: 3 },
	{ image: profileDataImg4, value: 'Setup controls', id: 4 }
];

export default class App extends React.Component {


	state = {
		fone: bg
	};

	onFoneChange = (e) => {
		this.setState({
			fone: e.currentTarget.querySelector('.image').getAttribute('src')
		});
	};


	render() {
		return (
			<div>
				<AppFone
					fone={this.state.fone}
				/>
				<AppHeader
					profileData={profileData}
					menuTabs={menuTabs}
				/>
				<Airplanes
					airplanes={airplanesElements}
					onFoneChange={this.onFoneChange}
				/>
			</div >
		);
	};
};
