import React from 'react';
import { Row, Col, Card } from 'antd';
import 'antd/dist/reset.css';

const { Meta } = Card;

function Services() {
  // Sample data for services
  const servicesData = [
    {
      id: 1,
      image: "https://i.ibb.co.com/wNjDX6N/car-rental.jpg",
      title: 'Car Rental',
      description: 'Rent cars for any occasion with flexible plans and pricing.',
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/dbXtYf1/car-maintenace.jpg",
      title: 'Car Maintenance',
      description: 'Affordable and reliable maintenance services for your car.',
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/3fNKMpw/luxury-cars.jpg",
      title: 'Luxury Cars',
      description: 'Experience luxury rides with our premium car collection.',
    },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2 className='text-left' style={{ paddingLeft:"260px", marginBottom: '50px', fontWeight: 'bold' }}>Our Other Services</h2>
      <Row justify={"center"} gutter={50}>
        {servicesData.map((service) => (
          <Col xs={24} sm={12} md={8} lg={5} key={service.id}>
            <Card
            className='text-left'
              cover={
                <img
                  alt={service.title}
                  src={service.image}
                  style={{ height: '200px', objectFit: 'cover'}}
                />
              }
            >
              <Meta title={service.title} description={service.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;
