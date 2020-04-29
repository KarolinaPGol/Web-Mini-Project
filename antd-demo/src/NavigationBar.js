import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

function NavigationBar() {
  return (
    <div>
      <Row>
        <Col span={6}>
          <h1>
            <Link to="/">Home</Link>
          </h1>
        </Col>
        <Col span={6}>
          <h1>
            <Link to="/portfolio">Portfolio</Link>
          </h1>
        </Col>
        <Col span={6}>
          <h1>
            <Link to="/portfolio2">Portfolio2</Link>
          </h1>
        </Col>
        <Col span={6}>
          <h1>
            <Link to="/contact">Contact</Link>
          </h1>
        </Col>
      </Row>
    </div>
  );
}

export default NavigationBar;
