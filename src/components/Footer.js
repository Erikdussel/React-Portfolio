import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
        <div>
          <div className="row content-splitter">
          </div>
          <div className="row home-content-container">
            <div className="col-md-2 col-sm-2 col-lg-2">
            </div>
            <div className="col-md-8 col-sm-8 col-lg-8 text-center">
              <h3> This Website </h3>
              <p>
                This portfolio website is created with the <a href="https://reactjs.org/" target="_blank">React</a> javascript libary and React Router.
              </p>
              <a href="https://github.com/Erikdussel/React-Portfolio" target="_blank" rel="noopener noreferrer">View the code on Github</a>
              <p className="footer-padding"><i> Erik Dussel 2018 </i></p>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-2">
            </div>
          </div> 
        </div> 
        );
    }
}