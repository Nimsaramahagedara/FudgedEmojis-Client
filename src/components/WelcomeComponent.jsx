import React from 'react';
import { Card, Typography } from 'antd';
//import 'antd/dist/antd.css';

const { Meta } = Card;

const WelcomeComponent = ({ name }) => {
  return (
    <Card style={{ backgroundColor: '#00C853'}}>
      <Meta
        title={
          <Typography.Title level={4} style={{color:'white'}}>
            Wanna Get Discounts<br />on Next Order ?
          </Typography.Title>
        }
        description={
          <>
            <Typography.Text className='text-white'>Submit Your Previous Order Details Now</Typography.Text>
            <br/>
            
            <Typography.Text mark>Upto 105%</Typography.Text>
          </>
        }
      />
    </Card>
  );
};

export default WelcomeComponent;
