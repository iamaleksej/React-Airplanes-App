import React from 'react';
import Menu from '../menu';
import Profile from '../profile';
import StartBtn from '../start-btn';

import './app-header.sass';

const AppHeader = ({ menuTabs, profileData }) => {


	return (
		<header className="header">
			<Menu menuTabs={menuTabs} />
			<StartBtn />
			<Profile profileData={profileData} />
		</header>
	);
};

export default AppHeader;