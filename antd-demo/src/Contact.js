import React from "react";
import { Typography } from 'antd';
import { Popover, Col, Row } from 'antd';

import "./Contact.css";

import phone from "./img/phoneIcon.png";
import mail from "./img/mail.png";
import instaIcon from "./img/instagram.png";
import linkedinIcon from "./img/linkedin.png";

const { Title } = Typography;


function Contact() {

  return (
      // Enables Animate.css on the webpage
     <div>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
        </head>
      <div class="bgImage"></div>       
        <div class="icons">               
      <Row justify='center'>              
      <Col span={6}>
      <div class="animate__animated animate__backInLeft animate__delay-0.1s"> 
        <Popover content={"+45 XX XX XX XX"} title="Telephone number">
          <img alt="Phone" width="60%" src={phone}/>
        </Popover>
      </div>
      </Col>

      <Col span={6}>
      <div class="animate__animated animate__backInDown animate__delay-0.2s">
        <Popover content={"portfolio@gmail.com"} title="Email address">
          <img alt="Email" width="60%" src={mail} />
        </Popover>
      </div>
      </Col>

      <Col span={6}>
      <div class="animate__animated animate__backInUp animate__delay-0.3s">
        <a href="https://www.instagram.com/">
          <img alt="Social media networking" width="60%" src={instaIcon} />
        </a>
      </div>
      </Col>
      <Col span={6}>
      <div class="animate__animated animate__backInRight animate__delay-0.4s">
        <a href="https://www.linkedin.com/">
          <img alt="Social media networking" width="60%" src={linkedinIcon} />
        </a>
      </div>
      </Col>
      </Row>
      </div>
      </div>
  );
}


export default Contact;
