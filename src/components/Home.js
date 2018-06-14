import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div className="Home text-center">
				<div className="Lander">
					<div className="row home-header-container">
						<h2>Most recent projects</h2>
					</div>
					<div className="row content-splitter">
					</div>
					<div className="row home-content-container">
						<div className="col-md-2 col-sm-2 col-lg-2">
						</div>
						<div className="col-md-4 col-sm-4 col-lg-4 justify-content-center">
							<img src="https://i.imgur.com/vVumQFr.png" className="img-responsive" />
						</div>
						<div className="col-md-4 col-sm-4 col-lg-4 text-container">
							<h3> Payment App </h3>
							<p>
								This is a mobile application I made for the clients of a Payment Service Provider. The main purpose for this application is to provide the users with a quick way to check their account balance, see their newest transactions and create payment links in the form of a QR-code.
							</p>
							<Link to="/Mobileapps" >
								<div>
									<h3>Click here to see more</h3>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
						</div>
					</div>
				</div>
			</div>
		);
	}
}