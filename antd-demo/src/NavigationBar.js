import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Row, Col, Divider } from "antd";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

function NavigationBar() {
  return (
    <div>
      <Divider
        orientation="left"
        style={{ color: "#333", fontWeight: "normal" }}
      ></Divider>
      <Row>
        <Col span={6}>
          <h1>
            <NavLink
              to="/"
              style={{ color: "black" }}
              activeStyle={{ color: "volcano-2" }}
            >
              Home
            </NavLink>
          </h1>
        </Col>
        <Col span={6}>
          <h1>
            <NavLink
              to="/portfolio"
              style={{ color: "black" }}
              activeStyle={{ color: "volcano-2" }}
            >
              Portfolio
            </NavLink>
          </h1>
        </Col>
        <Col span={6}>
          <h1>
            <NavLink
              to="/portfolio2"
              style={{ color: "black" }}
              activeStyle={{ color: "volcano-2" }}
            >
              Portfolio2
            </NavLink>
          </h1>
        </Col>
        <Col span={6}>
          <h1>
            <NavLink
              to="/contact"
              style={{ color: "black" }}
              activeStyle={{ color: "volcano-2" }}
            >
              Contact
            </NavLink>
          </h1>
        </Col>
      </Row>
    </div>
  );
}

export default NavigationBar;
