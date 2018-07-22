import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import './App.css';
import './media-queries.css';
import 'antd/dist/antd.css';
import logo from './images/futuretiplogo.png';
import screenshot from './images/screenshot1.png';

const Header = () => {
  return (<header className="header">
    <Row>
      <Col xl={8} lg={8} md={8} sm={8} xs={15}>
        <img className="logo" src={logo} alt="futuretip logo">
        </img>
        <a href="#" className="logo-text">FutureTip</a>
      </Col>
      <Col xl={16} lg={16} md={16} sm={16} xs={9}>
        <ul className="main-nav">
          <li><a href="#">Readings</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
        <i className="fas fa-bars bars-icon"></i>
      </Col>
    </Row>
  </header>)
};

const AppDisplay = () => {
  return (
    <Row>
      <Col className="app-container">
        <Col lg={12} md={12} md={12} sm={12} xs={14}>
          <img className="app-screenshot" src={screenshot} alt="app screenshot"/>
        </Col>
        <Col lg={12} md={12} md={12} sm={12} xs={10} className="tagline-container">
          <div className='tagline'>
            <p>Meet your personal</p>
            <h2>Astrologer</h2>
            <h2>+</h2>
            <h2>Therapist</h2>
          </div>
        </Col>
      </Col>
    </Row>
  )
}

class App extends React.Component {
  render () {
    return (
      <div>
        <div class="background-image"></div>
        <div class="container">
          <Header/>
          <AppDisplay/>
        </div>
      </div>
    )
  }
}

export default App;
