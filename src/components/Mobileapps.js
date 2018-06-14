import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Mobileapps.css';

export default class Mobileapps extends Component {

	render() {
		return (

			<div className="text-center">
				<div className="container fluid mobileapps-content-container">
					<div className="row">
						<div className="col-md-6 col-sm-6 col-lg-6">
							<Carousel>
								<Carousel.Item>
									<img width={150} height={200} alt="login-screen" src="https://i.imgur.com/vVumQFr.png" className="gallery-img"/>
									<Carousel.Caption>
										<h4>Login Screen</h4>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img width={150} height={200} alt="menu-screen" src="https://i.imgur.com/qEztRkI.png" className="gallery-img"/>
									<Carousel.Caption>
										<h4>Menu Screen</h4>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img width={150} height={200} alt="account-screen" src="https://i.imgur.com/HZM0axe.png" className="gallery-img"/>
									<Carousel.Caption>
										<h4>Account Screen</h4>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img width={150} height={200} alt="payment-methods" src="https://i.imgur.com/OCVWK0j.png" className="gallery-img" />
									<Carousel.Caption>
										<h4>Payment Methods Overview</h4>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img width={150} height={200} alt="payment-methods" src="https://i.imgur.com/oOpRLDg.png" className="gallery-img" />
									<Carousel.Caption>
										<h4>Transactions Overview</h4>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</div>
						<div className="col-md-6 col-sm-6 col-lg-6 justify-content-center">
							<div className="text-container">
								<h3> Payment App </h3>
								<p>
									This is a mobile application I made for the clients of a Payment Service Provider. The main purpose for this application is to provide the users with a quick way to check their account balance, see their newest transactions and create payment links in the form of a QR-code.
								</p>
								<a href="https://github.com/Erikdussel/PaymentsApp" target="_blank"  rel="noopener noreferrer">View the code on Github </a>
							</div>
						</div>
					</div>	
				</div>			
			</div>
		);
	}

}