import React, { useEffect, useState } from "react";
import MenuAppBar from "../components/AppBar";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Request from "../components/Request";
import CreateRequestFormModal from "../components/CreateRequestFormModal";
import axios from "../../axios-config";
import { useNavigate } from "react-router-dom";
import WelcomeComponent from "../components/WelcomeComponent";
import ImageCarousel from "../components/CarosolComponent";
import { Typography as Type } from 'antd';
import image65 from '../assets/65.png'
import image33 from '../assets/33.png'
import spin from '../assets/spin.png'
const UserDashboard = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const handleRequestCreated = () => {
    setShouldRefresh(true);
  };
  const compoContent = [
    {
      title:`Wanna Get Discounts`,
      secondLine:'on Next Order ?',
      sub:'Submit Your Last Order Details To Us',
      para:'Upto 105% On Amount',
      bgColor: '#00C853',
      bgImage: image65
    },
    {
      title:`Wait For Our`,
      secondLine:'Admin Approval',
      sub:'Wait till we verify your details',
      para:'Amazon | Shopify Vouchers',
      bgColor: '#FF6443',
      bgImage: image33
    },
    {
      title:`Spin the Wheel`,
      secondLine:'To Get Discount',
      sub:'Spin the Wheel and get your Voucher',
      para:'Check your email',
      bgColor: '#43BDFF',
      bgImage: spin
    }
  ]

  const [requests, setRequests] = useState([]);
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

  return (
    <div className="bg-gray-100">
      <MenuAppBar />
      <div className="p-3 ">
        <Typography variant="subtitle2" className="py-3 text-green-600">Hello {user}, Have a Nice Day !</Typography>
        <ImageCarousel components={compoContent}/>

        <br />
        <Type.Text type="secondary" className="mb-2">Submitted Requests</Type.Text>
        <div className="my-2">
        <Stack spacing={2}>
          {requests.map((request) => (
            <Request
              key={request._id}
              status={request.status}
              id={request._id}
              receipt={request.receiptNo}
              name={request.spinBy}
              date={request.createdAt}
            />
          ))}
        </Stack>
        </div>
      </div>
      <CreateRequestFormModal onRequestCreated={handleRequestCreated} />
    </div>
  );
};

export default UserDashboard;
