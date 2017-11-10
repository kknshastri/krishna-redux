// Common Imports
import React, { Component } from 'react';
import HeaderContainer from '../appContainers/header/header.container';
import FooterContainer from '../appContainers/footer/footer.container';
import ContentContainer from '../appContainers/content/app.content.container';
import SidenavComponent from '../appContainers/sideNavigation/sidenav.container';

// Style Imports
import './app.component.css';


export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<div className="header-section">
					<HeaderContainer></HeaderContainer>
				</div>

				<div className="body-section">
					<div className="sidenav-section">
						Side Bar Navigation
						<SidenavComponent></SidenavComponent>
					</div>
					
					<div className="content-section">
						<ContentContainer></ContentContainer>
					</div>
				</div>

				<div className="footer-section">
					<FooterContainer></FooterContainer>
				</div>
			</div>
		);
	}
}

