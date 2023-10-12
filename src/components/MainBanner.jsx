import { Typography } from 'antd'
import React from 'react'
import mainBannerImg from '../assets/banner-image.png'
import voucherImg  from '../assets/discount.png' 
const MainBanner = ({ name }) => {
  return (
    <div className='rounded flex items-center shadow-lg my-2 main-banner'>
      <div className='img w-3/4'>
        <img src={mainBannerImg} className='w-full h-full object-contain' />
      </div>
      <div className='w-3/4 p-2'>
        <Typography.Title level={5} className='text-white' style={{ color: 'white' }}><span className='text-yellow-500'>Hello,</span>{name} </Typography.Title>
        <p className='text-gray-100 text-xs text-center'>Buy any product from FudgedEmojis Store and get upto</p>
        <div className='flex justify-center'>
          <p className=' text-yellow-500 text-lg vouchers-text'>Vouchers</p>
          <img src={voucherImg} className='w-2/4 h-full object-contain' />
        </div>

        <p className='text-black p-1 bg-yellow-500 text-xs'>Limited time Offer</p>
        <p className='text-white text-xs' style={{ width: '120%', margin: '10px auto 10px -20%' }}>So Hurry up, buy from FudgedEmojis Store  <a href="https://fudgesemoji.myshopify.com/" className='text-white underline'>Click Here</a></p>
      </div>
    </div>
  )
}

export default MainBanner