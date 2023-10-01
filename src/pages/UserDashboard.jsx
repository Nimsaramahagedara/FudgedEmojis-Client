import React, { useEffect, useState } from "react";
import MenuAppBar from "../components/AppBar";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Request from "../components/Request";
import CreateRequestFormModal from "../components/CreateRequestFormModal";
import axios from "../../axios-config";
import { useNavigate } from "react-router-dom";
import WelcomeComponent from "../components/WelcomeComponent";
import ImageCarousel from "../components/CarosolComponent";
import { Typography as Type} from 'antd';


const UserDashboard = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [user , setUser] = useState('')
  const navigate = useNavigate()
  const handleRequestCreated = () => {
    setShouldRefresh(true);
  };
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu72w0KIpsoXd_QDqZs63cI6Y6SFWvZT_89g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu72w0KIpsoXd_QDqZs63cI6Y6SFWvZT_89g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu72w0KIpsoXd_QDqZs63cI6Y6SFWvZT_89g&usqp=CAU",
  ];

  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const name = localStorage.getItem('name')
    setUser(name)
    if(!email){
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
    {/* <ImageCarousel images={images}/> */}
    <div className="p-3 ">
      <Typography variant="subtitle2" className="p-3 text-green-600">Hello {user}, Have a Nice Day !</Typography>

      <WelcomeComponent name={'Nimsara'}/>
    <br/>
      <Type.Text type="secondary">Submitted Requests</Type.Text>
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
      <CreateRequestFormModal onRequestCreated={handleRequestCreated} />
    </div>
  );
};

export default UserDashboard;
