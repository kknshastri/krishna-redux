// Common Import
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Contact from './contact/contact.container';

// Importing Styles
import './app.content.container.css';


class ContentContainer extends Component {
	// constructor() {
	// 	super();
	// }

	renderContact = (data, idx) => {
		return (
			<Contact key={idx} idx={idx} data={data}></Contact>
		);
	};

	render() {
		return (
			<div className="content-container">
				{ this.props.allContacts.map(this.renderContact) }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		allContacts: state.allContacts
	};
}

// function matchDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		
// 	},dispatch);
// }

export default connect(mapStateToProps)(ContentContainer);