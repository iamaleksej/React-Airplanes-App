import React, { useState } from 'react';

import './profile.sass';
import avatar from '../../img/ava.png';

const Profile = ({ profileData }) => {
	const [openProfileData, setOpenProfileData] = useState(false);
	const toggleProfileData = () => setOpenProfileData(prevState => !prevState);

	return (
		<div
			className="profile_wrapper"
			onMouseEnter={toggleProfileData}
			onMouseLeave={toggleProfileData}
		>
			<div className="profile">
				<div className="profile__name">SU-27C</div>
				<div className="profile__img-arrow">
					<div className="profile__img">
						<img className="image" src={avatar} alt="avatar" />
					</div>
					<div className="profile__arrow">&#709;</div>
				</div>
			</div>
			{openProfileData && (
				<ul className="dd-list">
					{profileData.map(item => (
						<li className="dd-list__item" key={item.id}>
							<div className="dd-list__icon">
								<img src={item.image} alt={item.image} />
							</div>
							<p className="dd-list__text">
								{item.value}
							</p>
						</li>
					))}
				</ul>
			)}

		</div >
	);
};


export default Profile;