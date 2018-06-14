import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
	render() {
		return (
			<div className="About text-center">
				<div className="container fluid">
					<div className="row">
						<h2> About Me </h2>
					</div>
					<div className="row">
						<div className="col-md-2 col-sm-2 col-lg-2">
						</div>
						<div className="col-md-8 col-sm-8 col-lg-8 text-center-block">
							<p>	
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus sed ipsum sed imperdiet. Aenean faucibus tincidunt enim, ac gravida leo dictum sit amet. Suspendisse varius diam in magna vestibulum consectetur. Curabitur sed augue turpis. Vestibulum bibendum cursus justo, sed tristique est. Vivamus eget rhoncus justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla a rutrum tortor, in malesuada nisl. Nunc eleifend elementum arcu sit amet tincidunt. Vestibulum mattis arcu quis scelerisque varius. Quisque et gravida mi. Mauris non tortor auctor, semper ipsum at, aliquet orci. Quisque sed urna lacus. Morbi sollicitudin placerat tortor semper volutpat. Nulla facilisi.
							</p>
						</div>
						<div className="col-md-2 col-sm-2 col-lg-2">
						</div>
					</div>
				</div>
			</div>
		);
	}
}