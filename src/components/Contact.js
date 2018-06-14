import React, { Component } from 'react';
import fire from './../fire';
import './Contact'

export default class Contact extends Component {
	constructor(props) {
    	super(props);
    	this.state = { mailAddresses: [] };
 	 }
  	componentWillMount() {

    	// creates reference to messages in Firebase Database
    	let messagesRef = fire.database().ref('mailAddresses').orderByKey().limitToLast(100)
    	messagesRef.on('child_added', snapshot => {
      	// update state when message is added.
      	let mailAddress = { text: snapshot.val(), id: snapshot.key};
      	this.setState({ mailAddresses: [mailAddress].concat(this.state.mailAddress) });
    	})
  	}

  addMailAddress(e) {

    // prevent form submit from reloading the page
    e.preventDefault();
    // send message to Firebase
    if (this.inputEl.value !== '') {
   		fire.database().ref('mail-addresses').push(this.inputEl.value);
    }
    else {
    	console.log('please input something');
    }
    this.inputEl.value = '';
  }
	render() {
		return (
			<div>
				<div className="col-lg-6 col-md-6 col-sm-6">
					<h4 className="text-center">Enter you e-mail below to receive the latest news about my projects:</h4>
					<form onSubmit={this.addMailAddress.bind(this)}>
						<input type="email" className="form-control" placeholder="example@erikdussel.com" ref={ el => this.inputEl = el } />
						<input type="submit" className="in-line form-control"  />
					</form>
				</div>
				<div className="col-lg-2 col-md-2 col-sm-2">
					<h4>email:</h4>
					<h4>phone-number:</h4>
				</div>
				<div className="col-lg-4 co-md-4 cd-sm-4">
					<h4>contact@erikdussel.com</h4>
					<h4>+31612740852</h4>
				</div>
			</div>
		)
	}

}