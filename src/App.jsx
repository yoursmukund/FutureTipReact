import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import logo from './images/futuretiplogo.png';

class App extends Component {
  render () {
    return (
      <header className="header">
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
      </header>
    )
  }
}

export default App;
