import React from 'react';
import './Home.css';
import nextbike from './nextbike.jpg';
import stand from './stand.jpg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import Map from './Map';

const Home = () => {
	return(
		<div>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

	<div class="authentication">
		 <div class="row justify-content-between">
		    <div class="col-9 col-sm-6">
		    </div>
		    <div class="row col-3 col-sm-6">
		      <button class="col-3  col-sm-4"><a  href="http://localhost:3001/login">Login</a></button>
		      <button class="col-3  col-sm-4"><a  href="http://localhost:3001/signup">Sign Up</a></button>	
		    </div>
		  </div>
	</div>
	<div class="navigationbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <div class="container-fluid">
		    <a class="navbar-brand" href="#"><h2>AVSR</h2></a>
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>
		    <div class="collapse navbar-collapse" id="navbarSupportedContent">
		      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
		        <li class="nav-item">
		          <a class="nav-link active" aria-current="page" href="#">How it Works</a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link" href="#">Pricing</a>
		        </li>
		         <li class="nav-item">
		          <a class="nav-link" href="#">Find a Bike</a>
		        </li>
		         <li class="nav-item">
		          <a class="nav-link" href="#">Explore</a>
		        </li>
		         <li class="nav-item">
		          <a class="nav-link" href="#">Contact Us</a>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	</div>
	
	<div class="mainimg">
		<img src={nextbike} alt="nextbike" class="main-img center" />
	</div>
	<div class="quote col-lg-4 col-sm-10">
		<p>AVSR Bike Share offers 24/7 convenient 
		access to 50 bikes and 10 stations across 
		100 sq km of the city. Whether you are commuting 
		or exploring the city with friends and family,
		bike share is fun, flexible 
		and cost-effective way to navigate around. 
		</p>	
	</div>
	<div class="works center row justify-content-evenly">
		<div class="col-12"><h2>How It Works?</h2></div>
		<div class="col-lg-3 col-md-12 center"><h3>Register</h3>
			<div><h4>Create an Account</h4></div>
			<div>visit avsr.com</div>
		</div>
			<div class="col-lg-3 col-md-12 center"><h3>Ride</h3>
				<div><h4>Check out a bike</h4></div>
				<div>Press ENTER and choose</div>
				<div>1. Tap membership, enter PIN</div>
				<div>2. Enter Account #, enter PIN</div>
			</div>
			<div class="col-lg-3 col-md-12 center"><h3>Return</h3>
				<div><h4>Return to any Stand</h4></div>
				<div>Check Out</div>
			</div>
	</div>
	<div class="pricing center justify-content-evenly row"><h2>Pricing</h2>
		<div class="col-lg-2 col-md-12 center">
			<h3>24-Hour Pass</h3>
			<div>
				<p>
					Unlimited 30 minute rides
					Take as many rides as you want in 24 hours* with the first 30 minutes of each ride included. 
					Rides longer than 30 minutes incur overage fees.
					Overage fees:
					Each additional 30 minutes: + $6
					Ex. 90 minute ride = $12 in overages.
					*Starts upon completion of payment. All charges subject to tax.
				</p>
			</div>
		</div>
		<div class="col-lg-2 col-md-12 center">
			<h3>30-Day Pass</h3>
			<div>
				<p>
					Unlimited 30 minute rides
					Take as many rides as you want in 24 hours* with the first 30 minutes of each ride included. 
					Rides longer than 30 minutes incur overage fees.
					Overage fees:
					Each additional 30 minutes: + $6
					Ex. 90 minute ride = $12 in overages.
					*Starts upon completion of payment. All charges subject to tax.
				</p>
			</div>
		</div>
		<div class="col-lg-2 col-md-12 center">
			<h3>Annual Membership</h3>
			<div>
				<p>
					Unlimited 30 minute rides
					Take as many rides as you want in 24 hours* with the first 30 minutes of each ride included. 
					Rides longer than 30 minutes incur overage fees.
					Overage fees:
					Each additional 30 minutes: + $6
					Ex. 90 minute ride = $12 in overages.
					*Starts upon completion of payment. All charges subject to tax.
				</p>
			</div>
		</div>
	</div>
	<div class="bottom-img">
		<img src={stand} alt="nextbike" class="main-img center" />
	</div>
	<div class="findabike"><h2 class="center">Find A Bike</h2>
	<div id="map" class="map"><Map center={{ lat: 31.3534007, lng: 75.4586767 }} zoom={18} /></div>
		
	</div>
		<script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCImGXbOsjek6-nr7sP8iPb9IRHvaB7N8E&callback=initMap&libraries=&v=weekly"
      async
    ></script>


	<div class="safety"><h2 class="center">Ride Safe</h2>
		<div class="row center justify-content-evenly">
			<div class="col-lg-2 col-md-12 center">WEAR A HELMET</div>
			<div class="col-lg-2 col-md-12 center">RIDE WITH TRAFFIC</div>
			<div class="col-lg-2 col-md-12 center">RIDE SOBER</div>
		</div>
		<div class="row center justify-content-evenly">
			<div class="col-lg-2 col-md-12 center">WATCH CAR DOORS</div>
			<div class="col-lg-2 col-md-12 center">STAY OFF SIDWALK</div>
			<div class="col-lg-2 col-md-12 center">OBEY SIGNS & SIGNALS</div>
		</div>
		<div class="row center justify-content-evenly">
			<div class="col-lg-2 col-md-12 center">SIGNAL TURNS</div>
			<div class="col-lg-2 col-md-12 center">CAREFUL AT INTERSECTIONS</div>
			<div class="col-lg-2 col-md-12 center">YIELD TO PEDISTRIANS</div>
		</div>
		
	</div>
	<div class="About justify-content-evenly center"><h2 class="center">About Us</h2>
		<div>Contact Us</div>
		<div>FAQ</div>
		<div>MEMBERS PERK</div>
		<div>EVENTS</div>
		<div>LOCAL BIKE SHOPS</div>
	</div>
	<div class="center">
		<img src={facebook} />
		<img src={instagram} />
		<img src={twitter} />
	</div>
		</div>
	)
};

export default Home;