import { ShopOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import React from 'react'


const HowToBox = ({props}) => {
  const {bgColor} = props;
  return (
    <div className='p-3 bg-white text-gray-100 rounded-lg mb-2 how-to-box' data-aos={props.effect}>
      <div className='flex items-center'>
        <div className='rounded-lg flex justify-center' style={{width:'50px', aspectRatio:'1/1', backgroundColor:bgColor}}>
          {props.icon}
        </div>
        <div className='w-3/4'>
          <Typography.Title level={5} className='ml-2'>{props.title}</Typography.Title>
        </div>
      </div>
      <div className='py-2'>
        <p className='text-gray-500 text-xs'>{props.content}</p>
        <Typography.Link href={props.link} className='text-xs italic'>{props.linkText}</Typography.Link>
      </div>
    </div>
  )
}

export default HowToBox