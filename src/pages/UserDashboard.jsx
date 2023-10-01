import React, { useEffect, useState } from "react";
import MenuAppBar from "../components/AppBar";
import { Button, Typography } from "@mui/material";
import Request from "../components/Request";
import CreateRequestFormModal from "../components/CreateRequestFormModal";
import axios from "../../axios-config";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const navigate = useNavigate()
  const handleRequestCreated = () => {
    setShouldRefresh(true);
  };

  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
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
    <div>
      <MenuAppBar />
      <Typography
        variant="h6"
        gutterBottom
        color={"black"}
        sx={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Submitted Requests
      </Typography>

      <div className="">
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
      </div>
      <CreateRequestFormModal onRequestCreated={handleRequestCreated} />
    </div>
  );
};

export default UserDashboard;
