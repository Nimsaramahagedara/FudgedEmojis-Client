import React from 'react';
import { Card, Typography } from 'antd';
//import 'antd/dist/antd.css';

const { Meta } = Card;

const WelcomeComponent = ({ props }) => {
    const { title, sub, para, secondLine, bgColor, bgImage } = props;
    return (
        <Card style={{ backgroundColor: bgColor, textAlign: 'left' }} className='relative'
        >
            <Meta
                title={
                    <Typography.Title level={4} style={{ color: 'white' }}>
                        {title} <br /> {secondLine}
                    </Typography.Title>
                }
            />
            <div>
                <Typography.Text className='text-white'>{sub}</Typography.Text>
                <br />
                <Typography.Text className='text-white'>{para} </Typography.Text>
            </div>
            <div className='absolute bottom-0 right-4 w-1/4 h-full'>
                <img
                    className='w-full h-full object-contain'
                    alt="example"
                    src={bgImage}
                />
            </div>

        </Card>
    );
};

export default WelcomeComponent;
