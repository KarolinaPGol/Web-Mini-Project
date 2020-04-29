import React from "react";
import { Typography } from 'antd';
import { Space, Card } from 'antd';

const { Title } = Typography;

function Contact() {
  return (
    <Space direction="horizontal">
    <Card title="Phone number" style={{ width: 300 }}>
      <p>+45 XX XX XX XX</p>
    </Card>
    <Card title="Email" style={{ width: 300 }}>
      <p>portfolio@gmail.com</p>
    </Card>
    <Card title="Social media and networking" style={{ width: 300 }}>
      <p>Instagram</p>
      <p>LinkedIn</p>
    </Card>
  </Space>
  );
}

export default Contact;
