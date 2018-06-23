import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import logo from './images/futuretiplogo.png';

class App extends Component {
  render () {
    return (
      <header>
        <Row className="header">
          <Col lg={4} md={4}>
            <img className="logo" src={logo} alt="futuretip logo">
            </img>
          </Col>
          <Col lg={20} md={20}>
            <ul>
              <li>hi</li>
            </ul>
          </Col>
        </Row>
      </header>
    )
  }
}

export default App;
