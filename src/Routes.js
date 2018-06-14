import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Art from './components/Art';
import Games from './components/Games';
import Mobileapps from './components/Mobileapps'
import About from './components/About';
import Contact from './components/Contact';

export default () => 
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/mobileapps" exact component={Mobileapps} />
		<Route path="/games" exact component={Games} />
		<Route path="/art" exact component={Art} />
		<Route path="/about" exact component={About} />
		<Route path="/contact" exact component={Contact} />
		<Route component={NotFound} />
	</Switch>