import React from 'react';

import './app-fone.sass';

export default class AppFone extends React.Component {

	render() {

		const { fone } = this.props;

		return (
			<div className="fone">
				<img
					className="image"
					src={fone}
					alt={fone}
				/>
			</div>
		);
	};
};