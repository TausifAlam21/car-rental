import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import DefaultLayout from "../components/DefaultLayout";

AOS.init();

function Contact() {
  const [form] = Form.useForm();

  // ✅ Handle Form Submission
  const onFinish = (values) => {
    fetch("https://formspree.io/f/movvzndr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          message.success("Your message has been sent successfully!");
          form.resetFields(); // Clear the form
        } else {
          message.error("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        message.error("Network error. Please check your connection.");
      });
  };

  return (
    <DefaultLayout className="contact-page">
      <div className="py-5 my-5">
        <Row gutter={16} className="d-flex align-items-center p-5 my-5">
          <Col lg={12} className="contact-info" data-aos="fade-right">
            <h1>Contact Us</h1>
            <p>
              If you have any questions or need assistance, feel free to reach
              out to us!
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
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Your Name"
                name="name"
                rules={[
                  { required: true, message: "Please enter your name!" },
                ]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
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
    </DefaultLayout>
  );
}

export default Contact;
