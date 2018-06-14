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
		<Route path={'/React-Portfolio/'} exact component={Home} />
		<Route path={`${process.env.PUBLIC_URL}/Mobileapps`} exact component={Mobileapps} />
		<Route path={`${process.env.PUBLIC_URL}/Games`} exact component={Games} />
		<Route path={`${process.env.PUBLIC_URL}/Art`} exact component={Art} />
		<Route path={`${process.env.PUBLIC_URL}/About`} exact component={About} />
		<Route path={`${process.env.PUBLIC_URL}/Contact`} exact component={Contact} />
		<Route component={NotFound} />
	</Switch>

