import React, { Component } from 'react';
import './Art.css';

export default class Art extends Component {

	render() {
		return (
			<div className="text-center">
				<div className="container-fluid art-content-container">
					<div className="row">
						<div className="col-md-3 col-sm-3">
							<img src="https://i.imgur.com/8zcZFLz.png" alt="banner-eggs" className="img-responsive banner-img" />
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="text-container">
								<h3>Banner Art</h3>
								<p>
									Banners created for an Ahold-Delhaize partners event. 
								</p>
							</div>
						</div>								
						<div className="col-md-3 col-sm-3">
							<img src="https://i.imgur.com/x3knUk7.png" alt="banner-meat" className="img-responsive banner-img"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}