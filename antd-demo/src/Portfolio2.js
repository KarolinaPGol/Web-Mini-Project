import React from "react";
import "./Portfolio2.css";

import { Row, Col } from "antd";
import { Button } from "antd";

import Face3d from "./img/model.jpg";
import CowImg from "./img/AmagerFaelled_2.jpg";

function Portfolio2() {
  return (
    <div>
      <Row>
        <Col span={16}>
          <img
            src={Face3d}
            className="imageThumbnail"
            alt="3d model of a face"
          ></img>
        </Col>
        <Col span={8}>
          <div className="textAlignRight" style={{ top: "20%" }}>
            <h2>3D model in Blender</h2>
            3D model of a face that is suppose to be a perfect example of
            something to text allign lets see
            <div className="buttonUnderText">
              <Button type="dashed">Read more</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div className="textAlignLeft" style={{ top: "20%" }}>
            <h2>Highlander Cow</h2>
            Whose cow is that? I think I know. Its owner is quite happy though.
            Full of joy like a vivid rainbow, I watch her laugh. I cry hello.
            <div className="buttonUnderText">
              <Button type="dashed">Read more</Button>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <img
            src={CowImg}
            className="imageThumbnail"
            style={{ top: "20px" }}
            alt="Highlander cow photography"
          ></img>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <img
            src={Face3d}
            className="imageThumbnail"
            style={{ top: "40px" }}
            alt="3d model of a face"
          ></img>
        </Col>
        <Col span={8}>
          <div className="textAlignRight" style={{ top: "35%" }}>
            <h2>3D model in Blender</h2>
            3D model of a face that is suppose to be a perfect example of
            something to text allign lets see
            <div className="buttonUnderText">
              <Button type="dashed">Read more</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio2;
