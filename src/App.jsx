import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import logo from './images/futuretiplogo.png';
import screenshot from './images/screenshot1.png';

const Header = () => {
  return (<header className="header">
    <Row>
      <Col lg={4} md={4}>
        <img className="logo" src={logo} alt="futuretip logo">
        </img>
        <a href="#" className="logo-text">FutureTip</a>
      </Col>
      <Col lg={20} md={20}>
        <ul className="main-nav">
          <li><a href="#">Readings</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </Col>
    </Row>
  </header>)
};

const AppDisplay = () => {
  return (
    <Row>
      <Col className="app-container">
        <Col lg={12} md={12}>
          <img className="app-screenshot" src={screenshot} alt="app screenshot"/>
        </Col>
        <Col lg={12} md={12} className="tagline-container">
          <div className='tagline'>
            <h1>Meet your new</h1>
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
