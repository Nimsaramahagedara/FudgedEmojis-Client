import { Typography } from 'antd'
import React from 'react'
import mainBannerImg from '../assets/banner2.png'
import voucherImg  from '../assets/discount.png' 

const SecondBanner = ({onClick}) => {
  return (
    <button className='rounded-lg shadow-lg my-2 second-banner flex items-center p-0' onClick={onClick}>
      <div className='w-100 px-2'>
        <p className='text-gray-100 text-xs text-center'>Did You Buy From FudgedEmoji store?</p>
          <p className=' text-yellow-500 text-lg vouchers-text'>Wow that's Great !!</p>
{/* 
        <p className='text-black p-1 bg-yellow-500 text-xs'>Upload Your Bill</p> */}
        
        <p className='text-white text-xs' style={{margin: '20px auto' }}>Upload Your Bill Here and claim your 100% discount voucher now!!</p>
      </div>
      <div className='img w-3/4'>
        <img src={mainBannerImg} className='w-full h-full object-cover' />
      </div>
    </button>
  )
}

export default SecondBanner