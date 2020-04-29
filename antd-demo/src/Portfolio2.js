import React from "react";
import { Row, Col } from "antd";
import "./Portfolio2.css";

import Face3d from "./img/model.jpg";
import CowImg from "./img/AmagerFaelled_2.jpg";

function Portfolio2() {
  return (
    <div>
      <Row>
        <Col span={16}>
          <img
            src={Face3d}
            style={{ width: "90%" }}
            alt="3d model of a face"
          ></img>
        </Col>
        <Col span={8}>
          <div className="textAlignRight">
            3D model of a face that is suppose to be a perfect example of
            something to text allign lets see
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div className="textAlignLeft">
            Whose cow is that? I think I know. Its owner is quite happy though.
            Full of joy like a vivid rainbow, I watch her laugh. I cry hello.
          </div>
        </Col>
        <Col span={16}>
          <img
            src={CowImg}
            style={{ width: "90%" }}
            alt="Highlander cow photography"
          ></img>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <img
            src={Face3d}
            style={{ width: "90%" }}
            alt="3d model of a face"
          ></img>
        </Col>
        <Col span={8}>
          <div className="textAlign">
            3D model of a face that is suppose to be a perfect example of
            something to text allign lets see
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio2;
