import React, { useState } from 'react';
import Dropdown from '../dropdown';
import './menu.sass';

const Menu = ({ menuTabs }) => {

	// const [open, setOpen] = useState(false);
	// const toggle = () => setOpen(prevState => !prevState);
	const [opened, setOpened] = useState();
	const toggle = (event) => {
		setOpened(event.target.id);
	};

	const menuTabWrapper = menuTabs.map((item) => {
		return (
			<li
				className="menu__item_wrapper"
				id={item.id}
				tabIndex={item.id}
				onMouseEnter={toggle}
				onMouseLeave={() => setOpened()}
			>
				<div className="menu__item" id={item.id}>
					{item.title}
					{item.subtitle && (
						<span className="menu__small-text">{item.subtitle}</span>
					)}
				</div>
				{item.id === +opened && <Dropdown item={item} />}
			</li >
		);
	});

	return (
		<nav className="nav" >
			<ul className="menu">
				{menuTabWrapper}
			</ul>
		</nav>
	);
};

export default Menu;
