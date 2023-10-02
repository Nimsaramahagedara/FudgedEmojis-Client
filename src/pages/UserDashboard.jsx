import React, { useEffect, useState } from "react";
import MenuAppBar from "../components/AppBar";
import { Box, Stack, Typography } from "@mui/material";
import Request from "../components/Request";
import CreateRequestFormModal from "../components/CreateRequestFormModal";
import axios from "../../axios-config";
import { useNavigate } from "react-router-dom";
import { Alert, Badge, Button, Empty, Rate, Typography as Type } from 'antd';
import banner from '../assets/Banner.png'
import waitingImg from '../assets/waiting.svg'

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

  return (
    <>
      <MenuAppBar />
      <div className="p-3 flex flex-col bg-white">
        {
          visible && <Alert message={`Hello ${user}, Have a Nice Day!`} type="success" closable afterClose={handleClose} className="mb-2" />
        }

        {/* <Typography variant="subtitle2" className="p-1 text-green-600">Hello {user}, Have a Nice Day !</Typography> */}
        <div>
          <Badge.Ribbon text="$ 10" color="green">
            <div className="rounded-lg overflow-hidden mb-2">
              <img src={banner} className="w-full h-full object-contain mx-auto" style={{maxWidth:'480px'}}/>
            </div>
          </Badge.Ribbon>
          <hr />
          <Type.Title level={5} className="px-1 mt-0">Fudged Emoji - The Ultimate Collection of Playful and Creative Icons</Type.Title>
          <Rate disabled defaultValue={5} />
        </div>
        <br/>
        <Type.Text type="secondary" className="mb-1">Submitted Requests</Type.Text>
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
                <span>
                  Hmmm..?🤔<br />There's no request <br />
                </span>
              }>
            </Empty>

            }

          </Stack>
        </div>
        <Type.Title level={5} className="px-1 mb-0">Express Yourself Like Never Before!</Type.Title>
        <Type.Text type="secondary" className="px-1 mb-3" >In the world of digital communication, words alone are not enough. Emojis and icons have become the universal language of our time, adding color, emotion, and personality to our conversations. At Fudged Emoji, we're taking this language to a whole new level.</Type.Text>
        <hr/>
        <Badge.Ribbon text="Special Offer" color="red" placement="start">
        <div className="bg-amber-100 p-3 my-5">
          <Type.Text italic>"For a limited time, we're offering a 90% discount on our complete emoji pack. Don't miss out on this opportunity to spice up your digital conversations!"</Type.Text>
        </div>
        </Badge.Ribbon>
        <hr/>
        <Type.Text type="secondary" underline className="py-0 px-3 mt-1">We offer an extensive collection of 3000+ unique, high-quality digital emojis that are designed to let your personality shine through every message you send.</Type.Text>

      </div>
      <CreateRequestFormModal onRequestCreated={handleRequestCreated} />
      {/* <BottomNavigationBar setIsModalOpen={setModalOpen}/> */}
    </>
  );
};

export default UserDashboard;
