import React from "react";
import { Typography } from 'antd';
import { Card, Col, Row, Space } from 'antd';

import "./Contact.css";

import phone from "./img/phoneIcon.jpg";
import mail from "./img/mail.png";
import instaIcon from "./img/instagram.png";
import linkedinIcon from "./img/linkedin.png";

const { Title } = Typography;

function Contact() {
  return (
    <div style={{ background: '#ECECEC', padding: '200px' }}>
    <Row gutter={16}>
    <Col span={6}>
    <Card>
        <img alt="Phone" width="60%" src={phone} />
        <h1>+45 XX XX XX XX</h1>
    </Card>
    </Col>

    <Col span={6}>
    <Card>
        <img alt="Email" width="60%" src={mail} />
        <h1>portfolio@gmail.com</h1>
    </Card>
    </Col>

    <Col span={6}>
    <Card>
        <a href="https://www.instagram.com/"> 
        <img alt="Social media networking" width="60%" src={instaIcon} />
        </a>
        <div className="InstaText">
        <h1><a href="https://www.instagram.com/"> Instagram account </a></h1>
        </div>
    </Card>
    </Col>
    <Col span={6}>
    <Card>
        <img alt="Social media networking" width="60%" src={linkedinIcon} />
        <h1><a href="https://www.linkedin.com/"> LinkedIn account </a></h1>
    </Card>
    </Col>
    </Row>
    </div>
  );
}

export default Contact;
