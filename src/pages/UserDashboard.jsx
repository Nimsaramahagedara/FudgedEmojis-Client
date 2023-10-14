import React, { useEffect, useState } from "react";
import MenuAppBar from "../components/AppBar";
import { Box, Stack, Typography } from "@mui/material";
import Request from "../components/Request";
import CreateRequestFormModal from "../components/CreateRequestFormModal";
import axios from "../../axios-config";
import { useNavigate } from "react-router-dom";
import { Alert, Badge, Button, Empty, Rate, Typography as Type } from 'antd';
import waitingImg from '../assets/waiting.svg'
import MainBanner from "../components/MainBanner";
import HowToBox from "../components/HowToBox";
import './Home.css';
import { CloudUploadOutlined, DollarCircleOutlined, RedoOutlined, ShopOutlined } from "@ant-design/icons";
import SecondBanner from "../components/SecondBanner";
const UserDashboard = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [user, setUser] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate()
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  const handleRequestCreated = () => {
    setShouldRefresh(true);
  };


  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const name = localStorage.getItem('name')
    setUser(name)
    if (!email) {
      navigate('/login')
    }
    axios
      .get(`/request/spinning?email=${email}`)
      .then((res) => {
        setRequests(res.data);

        setShouldRefresh(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [shouldRefresh]);

  const howtoContent=[
    // {
    //   title:'Visits The FudgesEmojis Store',
    //   content:'Visit and Buy a product, Get Your Invoice',
    //   link:'https://fudgesemoji.myshopify.com/',
    //   linkText:'Buy Now',
    //   icon: <ShopOutlined className='text-2xl'/>,
    //   bgColor:'rgb(124 102 255)',
    //   effect:'fade-in'
    // },
    // {
    //   title:'Upload Your Invoice',
    //   content:'Upload Your Invoice and Get 100% Discount Voucher',
    //   link:'#',
    //   linkText:'Upload Here',
    //   icon: <CloudUploadOutlined className='text-2xl'/>,
    //   bgColor:'rgb(220 87 87)',
    //   effect:'fade-in'
    // },
    // {
    //   title:'Spin the Wheel',
    //   content:'After the Approval, Spin the wheel and Get Discount Amount',
    //   link:'#',
    //   linkText:'Spin Now',
    //   icon: <RedoOutlined className='text-2xl'/>,
    //   bgColor:'rgb(31 141 0)',
    //   effect:'fade-in'
    // },
    // {
    //   title:'Claim the Voucher via Email',
    //   content:'You can claim Your Voucher (upto 100%) via email within 48 hours',
    //   link:'#',
    //   linkText:'Check Your inbox',
    //   icon: <DollarCircleOutlined className='text-2xl'/>,
    //   bgColor:'#bf9500',
    //   effect:'fade-in'
    // }

  ]
  return (
    <>
      <div className="absolute top-0 w-full  bg-gradient-to-r from-cyan-500 to-blue-500">
        <MenuAppBar />
        <div className="p-3 flex flex-col user-home">
          {
            visible && <Alert message={`Hello ${user}, Have a Nice Day!`} type="success" closable afterClose={handleClose} className="mb-2" />
          }
        <div>
            <MainBanner name={user}/>
            <div className="px-1 mt-0 banner-title">
              <Type.Title level={5} className="text-white mb-0" style={{color:'white'}}>Fudged Emoji - The Ultimate Collection of Playful and Creative Icons</Type.Title>
              <Rate disabled defaultValue={5} className="text-sm" />
            </div>
          </div>
          <CreateRequestFormModal onRequestCreated={handleRequestCreated} />
          <br />
          <div className="howto">
            <Type.Title level={5} className='text-white' style={{color:'white'}}>How to ?</Type.Title>
            {
              howtoContent.map((element,index)=>{
                return <HowToBox props={element}  key={index}/>
              })
            }
          </div>


          <Type.Text type="secondary" className="mb-1" mark>Submitted Requests</Type.Text>
          <div className="my-2">
            <Stack spacing={2} className="items-center">
              {requests.length > 0 ? requests.map((request) => (
                <Request
                  key={request._id}
                  status={request.status}
                  id={request._id}
                  receipt={request.receiptNo}
                  name={request.spinBy}
                  date={request.createdAt}
                  image={request.imgUrl}
                />
              )) : <Empty
                className="items-center"
                image={waitingImg}
                description={
                  <span className="text-white">
                    Hmmm..?🤔<br />There's no request <br />
                  </span>
                }>
              </Empty>

              }

            </Stack>
          </div>
          <hr/>
          <div className="bg-white p-3 rounded-t-lg border-sm shadow-lg mt-2" data-aos='fade-right'>
            <Type.Title level={5} className="px-1 mb-0">Express Yourself Like Never Before!</Type.Title>
            <Type.Text type="secondary" className="px-1 mb-3" >In the world of digital communication, words alone are not enough. Emojis and icons have become the universal language of our time, adding color, emotion, and personality to our conversations. At Fudged Emoji, we're taking this language to a whole new level.</Type.Text>
          </div>

          {/* <Badge.Ribbon text="Special Offer" color="red" placement="start">
            <div className="bg-amber-100 p-3 my-5 shadow-lg" data-aos='fade-left'>
              <Type.Text italic>"For a limited time, we're offering a 90% discount on our complete emoji pack. Don't miss out on this opportunity to spice up your digital conversations!"</Type.Text>
            </div>
          </Badge.Ribbon> */}
          <Type.Text type="secondary" underline className="py-0 px-3 mt-1 bg-white rounded-t-lg p-3 shadow-lg" data-aos='fade-right'>We offer an extensive collection of 3000+ unique, high-quality digital emojis that are designed to let your personality shine through every message you send.</Type.Text>

        </div>
       
        {/* <BottomNavigationBar setIsModalOpen={setModalOpen}/> */}
      </div>
    </>
  );
};

export default UserDashboard;
