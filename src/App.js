import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './header-image.png';
import Footer from './components/Footer';
import Routes from './Routes';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App container">
        <div className="header-image">
          <img className="left-block img-title" src={logo} alt="logo"/>
        </div>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/React-Portfolio/">HOME</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/React-Portfolio/Mobileapps">
                <NavItem>MOBILE APPS</NavItem>
              </LinkContainer>
              <LinkContainer to="/React-Portfolio/Games">
                <NavItem>GAMES</NavItem>
              </LinkContainer>
              <LinkContainer to="/React-Portfolio/Art">
                <NavItem>"ART"</NavItem>
              </LinkContainer>
              <LinkContainer to="/React-Portfolio/About">
                <NavItem>ABOUT</NavItem>
              </LinkContainer>
              <LinkContainer to="/React-Portfolio/Contact">
                <NavItem>CONTACT</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;



