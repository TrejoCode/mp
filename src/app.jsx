/**
 *  @name: app.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Aplicación Web
 * 	@process: 2
*/

import React 			from 'react';
import Activity 		from './components/activities/activity';
import Properties 		from './components/properties';
import Footer 			from './components/footer';

// Data
import { activities } 	from './data/activities.json';
import { properties } 	from './data/properties.json';

// Images
import ImgHead 			from './img/img_promo.jpg';
import ImgLogo 			from './img/logo_PR.png';
import ImgFlow 			from './img/img_flowrider.jpg';
import ImgPlayground 	from './img/img_playground.jpg';
import ImgWaterPark 	from './img/img_kids.jpg';
import ImgSpa 			from './img/img_spa.jpg';
import ImgMoon 			from './img/img_moonpalace.jpg';
import ImgGrand 		from './img/img_thegrand.jpg';
import ImgJamaica 		from './img/img_jamaica.jpg';
import ImgBeach 		from './img/img_beach.jpg';
import ImgCozumel 		from './img/img_cozumel.jpg';
import ImgPlaya 		from './img/img_playacar.jpg';

const activitiesImages = [ImgFlow, ImgPlayground, ImgWaterPark, ImgSpa];
const propertiesImages = [ImgMoon, ImgGrand, ImgJamaica, ImgBeach, ImgCozumel, ImgPlaya];


const App = () => (
	<div className="main flex">
		<div className="justify-center full">
			<div className="main-container column">
				<div className="head">
					<div className="logo full">
						<div className="responsive-img">
							<img src = { ImgLogo } alt="Logo Moon Palace" />
						</div>
					</div>
					<div className="content full justify-center align-end">
						<div className="container column">
							<h2 className="color-orange shadow">
								It's time
							</h2>
							<div className="white-space-4"></div>
							<h2 className="color-secondary font-dancing" id="txt-share">
								to share
							</h2>
							<div className="white-space-16"></div>
							<h2 className="color-orange shadow">
								Traveling with your loved ones has
							</h2>
							<div className="white-space-8"></div>
							<h2 className="color-secondary font-dancing" id="txt-never">
								never been so fun
							</h2>
							<div className="white-space-16"></div>
							<p className="weight-bold font-small">
								Save up to
							</p>
							<div className="description row">
								<div className="left column">
									<h2 className="color-secondary" id="price">
										45
									</h2>
									<p className="weight-medium font-mini" id="apply">
										* Terms and conditions apply
									</p>
								</div>
								<div className="right column">
									<div className="row">
										<p className="weight-medium font-tiny" id="percentage">
											<span className="weight-bold">%</span> on an all-inclusive vacations to México or Jamaica
										</p>
									</div>
									<div className="white-space-4"></div>
									<div className="column">
										<div className="row">
											<div className="icon text-center">
												<span className="font-mini">+</span>
											</div>
											<p className="weight-medium font-mini">$1,500 USD Resort Credit</p>
										</div>
										<div className="row">
											<div className="icon text-center">
												<span className="font-mini">+</span>
											</div>
											<p className="weight-medium font-mini">Kids & Teens Stay Free</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="head-image">
						<img src = { ImgHead } alt = "Promotional" />
					</div>
				</div>
				<div className="justify-center">
					<div className="container column">
						<div className="white-space-32"></div>
						<div className="justify-center">
							<a href="https://www.moonpalacecancun.com/es" className="btn btn-secondary color-white">
								BOOK NOW
							</a>
						</div>
						<div className="white-space-32"></div>
					</div>
				</div>
				<div className="justify-center">
					<h2 className="text-center">
						Activities and Atractions
					</h2>
				</div>
				<div className="white-space-16"></div>
				<div className="activities justify-center">
					<div className="row-responsive full">
						<Activity data = { activities } images = { activitiesImages } />
					</div>
				</div>
				<div className="white-space-32"></div>
				<div className="justify-center">
					<h2 className="text-center">
						Enjoy up to <span className="weight-bold">45% off</span> at the followings properties
					</h2>
				</div>
				<div className="white-space-16"></div>
				<div className="properties justify-center">
					<div className="row-responsive full">
						<Properties data = { properties } images = { propertiesImages } />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
