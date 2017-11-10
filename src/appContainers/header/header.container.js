// Common Import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Styles
import './header.container.css';

// Import Images
import appLogo from '../../assets/images/app-logo.png';

class HeaderContainer extends Component {
	render() {
		return (
			<div className="header">
				<div className="logo-section">
					<img className="app-logo" alt="App Logo" src={appLogo} />
				</div>
				<div className="title-section">
					<h1>Welcome!! By {this.props.name}!</h1>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		name: 'Krishna Kant'
	};
}

export default connect(mapStateToProps)(HeaderContainer);