import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full'>
        <img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2022/08/Zrzut-ekranu-2022-08-26-o-14.10.43-1024x589.png.webp" className='w-full h-full object-contain'/>
        <Button onClick={()=>navigate('/')}>Go Back</Button>
    </div>
  )
}

export default ErrorPage