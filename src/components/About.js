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
						<div className="col-md-8 col-sm-8 col-lg-8">
						</div>
						<div className="col-md-2 col-sm-2 col-lg-2">
						</div>
					</div>
					<div className="row">
						<div className='col-md-1 col-sm-1 col-lg-1'>
						</div> 
						<div className="col-md-5 col-sm-5 col-lg-5">
							<img src="https://i.imgur.com/n8KrEF2.png" className="img-responsive about-image"/>
						</div>
						<div className="col-md-5 col-sm-5 col-lg-5 text-center-block about-page">
							<p>	
								Hi I'm Erik Dussel and welcome to my website
							</p>
							<p>
								Currently I am studying Game Design at the Hanze in Groningen.
							</p>
							<p>
								In my free time I am a Programmer and Designer. My main expertize is front-end development using C#, C++ and various Javascript frameworks like, Ionic-Angular, and React.  
							</p>
						</div>
						<div className="col-md-1 col-sm-1 col-lg-1">
						</div>
					</div>
				</div>
			</div>
		);
	}
}