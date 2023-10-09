import { Typography } from 'antd'
import React from 'react'
import mainBannerImg from '../assets/MainBannerImage.png'
const MainBanner = ({name}) => {
  return (
    <div className='bg-gradient-to-r from-cyan-800 to-indigo-400 rounded flex items-center shadow-lg my-2'>
        <div className='img w-2/4'>
            <img src={mainBannerImg} className='w-full h-full object-contain' />
        </div>
        <div className='w-3/4 p-2'>
            <Typography.Title level={5} className='text-white' style={{color:'white'}}><span className='text-black'>Hello,</span>{name} </Typography.Title>
            <p className='text-gray-100 text-xs'>Buy any product from FudgedEmojis Store and get upto 100% discount vouchers!</p>
            <p className='text-black p-1 bg-yellow-500 text-xs'>Limited time Offer</p>
            <p className='text-white text-xs'>To buy from FudgedEmojis Store  <a href="https://fudgesemoji.myshopify.com/" className='text-white underline'>Click Here</a></p>
        </div>
    </div>
  )
}

export default MainBanner