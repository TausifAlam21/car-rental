import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Contact() {
  const onFinish = (values) => {
    console.log('Form values: ', values);
    // You can integrate email sending or API handling here
  };

  return (
    <div className="contact-page">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={12} className="contact-info" data-aos="fade-right">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or need assistance, feel free to reach out to us!
          </p>
          <ul>
            <li>
              <MailOutlined style={{ marginRight: 8 }} />
              <strong>Email:</strong> tausifalam.study@gmail.com
            </li>
            <li>
              <PhoneOutlined style={{ marginRight: 8 }} />
              <strong>Phone:</strong> 01627444625
            </li>
          </ul>
        </Col>
        <Col lg={12} className="contact-form" data-aos="fade-left">
          <h2>Send Us a Message</h2>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Your Email"
              name="email"
              rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please enter your message!' }]}
            >
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
