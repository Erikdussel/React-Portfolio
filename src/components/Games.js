import React, { Component } from 'react';
import './Games.css';
import { Carousel } from 'react-bootstrap';

export default class Games extends Component {

	run()
	{
		console.log(`${process.env.PUBLIC_URL}`);
	}

	render() {
		return (
			<div className="text-center">
					<div className="container-fluid games-content-container" id="content-splitter">
						<div clasName="row">
							<div className="col-md-3 col-sm-3 col-lg-3">
							</div>
							<div className="col-md-6 col-sm-6 col-lg-6">
								<h3>Custom Physics Engine</h3>
								<p></p>
							</div>
							<div className="col-md-3 col-sm-3 col-lg-3">
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-sm-6 col-lg-6">
								<Carousel>
										<Carousel.Item>
											<img width={400} height={400} alt="game-screen" src="https://i.imgur.com/sVICkKp.png" className="gallery-img"/>
											<Carousel.Caption>
												<h4>Game Screen</h4>
											</Carousel.Caption>
										</Carousel.Item>
										<Carousel.Item>
											<img width={400} height={400} alt="game-screen" src="https://i.imgur.com/EX5Nxqp.png" className="gallery-img"/>
											<Carousel.Caption>
												<h4>Game Screen</h4>
											</Carousel.Caption>
										</Carousel.Item>
								</Carousel>
							</div>
							<div className="col-md-6 col-sm-6 col-lg-6">
								<div className="text-container">
									<h3>1-vs-1 Mini Game</h3>
									<p>
										A simple, but fun 1 vs 1 game build using the Phaser 3 Library.
									</p>
									<a href="" target="_blank" rel="noopener noreferrer">View the code on GitHub</a>
								</div>
							</div>
						</div>	
					</div>
			</div>

		)
	}

}