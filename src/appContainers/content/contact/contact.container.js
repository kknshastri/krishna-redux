// Common Import
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { selectContact, deleteContact, unselectContact, updateContact }
	from '../../../actions/contact.action';
 
// Importing Styles
import './contact.container.css';

// Importing Images
import userFemale from '../../../assets/images/user-female.png';
import userMale from '../../../assets/images/user-male.png';


class Contact extends Component {	
	constructor() {
		super();
		this.state = {};
        this.state.editMode = false;
        this.state.selectedGender = 'M';
    }

    componentDidMount() {
        console.log('Contact Component Mounted...');
        // this.setState({selectedGender: this.props.data.gender});
    }
    
    componentWillUnmount() {
        console.log('Contact Component Unmounted...');
    }

    selectGender(e) {
        console.log('New Gender = ' + e.target.value);
        this.setState({selectedGender: e.target.value});
    }

	edit(data, e) {
        console.log('Editing...');
		this.setState({selectedGender: data.gender});
		this.setState({editMode: true});
	}
	
	save(data, e) {
		console.log('Saving...');
		// console.log('New name = ' + data.name);     // Not Working this way
		var updatedContact = {
			"id": data.id,
            "name": !!this.refs.newName.value ? this.refs.newName.value : 'Edited Contact',
            "gender": this.state.selectedGender,
            "address": !!this.refs.newAddress.value ? this.refs.newAddress.value : 'NA',
            "city": !!this.refs.newCity.value ? this.refs.newCity.value : 'NA',
            "pinCode": !!this.refs.newPinCode.value ? this.refs.newPinCode.value : '999999',
            "contact": !!this.refs.newContact.value ? this.refs.newContact.value : 'NA',
            "email": !!this.refs.newEmail.value ? this.refs.newEmail.value : 'NA'
		};
		this.props.saveUpdatedContact(updatedContact);
		this.setState({editMode: false});
		if(!!this.props.selectedContact && (this.props.selectedContact.id === data.id)) {
			// Updating selected contact while editing this contact.
			this.props.selectThisContact(updatedContact);
		}
	}
	
	cancelSave(e) {
		console.log('Cancel Save...');
		this.setState({editMode: false});
	}
	
	removeContact(data, evt) {
		if(!!this.props.selectedContact && (this.props.selectedContact.id === data.id)) {
			// Removing selected contact while deleting this contact.
			this.props.removeSelectedContact();
		}
		this.props.deleteThisContact(data);
	}
	
	renderViewMode(data, idx) {
		return (
			<div className="contactStyle">
				<div className="profile-pic">
					{   
						(data.gender === 'M') ?
						(<img className="avatar" alt="User Female" src={userMale} />) :
						(<img className="avatar" alt="User Male" src={userFemale} />)
					}
				</div>
				<div className="contact-details">
					{/* <span>Key: {idx}</span> */}
					<h2>Name: {data.name}</h2>
					<h3>Address: {data.address}, {data.city}</h3>
					<h3>Pin Code: {data.pinCode}</h3>
					<h3>Contact No: {data.contact}</h3>
					<h3>Email Id: {data.email}</h3>
				</div>
				<div className="contact-action">
					<button onClick={() => this.props.selectThisContact(data)}>Select This Contact</button>
					<button onClick={(e) => this.removeContact(data, e)}>Delete Contact</button><br/>
					<button onClick={(e) => this.edit(data, e)}>Edit Contact</button>
				</div>
			</div>
		);
	}
	
	renderEditMode(data, idx) {
        return (
			<div className="contactStyle">
				<div className="profile-pic">
					{   
						(this.state.selectedGender === 'M') ?
						(<img className="avatar" alt="Female User" src={userMale} />) :
						(<img className="avatar" alt="Male User" src={userFemale} />)
					}
				</div>
				<div className="contact-details">
					{/* {<span>Key: {idx}</span>} */}
					<h2>Update Contact:</h2>
					<div><label>Enter Name: </label><input type="text" ref="newName" defaultValue={data.name} /></div>
					<div><label>Address: </label><input type="text" ref="newAddress" defaultValue={data.address} /></div>
					<div><label>City: </label><input type="text" ref="newCity" defaultValue={data.city} /></div>
					<div><label>Pin Code: </label><input type="number" ref="newPinCode" defaultValue={data.pinCode} /></div>
					<div><label>Contact No: </label><input type="text" ref="newContact" defaultValue={data.contact} /></div>
					<div><label>Email Id: </label><input type="email" ref="newEmail" defaultValue={data.email} /></div>
					<div>
						<label>Select Gender: </label>
						<input type="radio" value="M"
							checked={this.state.selectedGender === 'M'}
							onChange={(e) => this.selectGender(e)} /><span>Male </span>
						<input type="radio" value="F"
							checked={this.state.selectedGender === 'F'}
							onChange={(e) => this.selectGender(e)} /><span>Female </span>
					</div>
					
				</div>
				<div className="contact-action">
					<button onClick={(evt) => this.save(data, evt)}>Save Changes</button>
					<button onClick={(evt) => this.cancelSave(evt)}>Cancel Update</button>
				</div>
			</div>
		);
	}
	
	render() {  
		if(this.state.editMode) {
			return (this.renderEditMode(this.props.data, this.props.idx));
		} else {
			return (this.renderViewMode(this.props.data, this.props.idx));
		}	
	}	
}

function mapStateToProps(state) {
	return {
		selectedContact: state.selectedContact
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectThisContact: selectContact,
		deleteThisContact: deleteContact,
		removeSelectedContact: unselectContact,
		saveUpdatedContact: updateContact
	},dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Contact);