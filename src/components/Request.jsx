import React from "react";
import { Card, Typography, Button } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Image } from "antd"; // Import the Image component from Ant Design


const Request = ({ id, status, receipt, name, date,image }) => {
  const navigate = useNavigate();
  const formattedDate = moment(date).format("DD-MMM-YYYY, h-MM a");

  const handleSpinClick = (id) => {
    navigate(`/spin?id=${id}`);
  };

  return (
    <Card
      bordered={false}
      hoverable
      style={{
        width: "100%",
        alignItems: "center", // Center content vertically
        padding: "12px", // Add some padding for spacing
        boxShadow:'unset'
      }}
      bodyStyle={{
        padding:'0'
      }}
      className="bg-sky-700 shadow-2xl"
    >
      {/**bg-gradient-to-r from-sky-500 to-sky-800 */}
      <div className="flex items-center">
      {/* Left-side image */}
      <div className="mr-2 w-1/4 overflow-hidden p-3 rounded-full border-2  bg-gray-100">
        <Image
          width={'100%'} // Set the width of the image as per your requirements
          src={image}
          style={{
            maxHeight:'55px'
          }}
          
          className="object-contain w-full h-full"
        />
      </div>

      {/* Right-side content */}
      <div style={{ flex: 1 }}>
        <Typography.Text className="text-white"><b>Bill No: </b>{receipt}</Typography.Text><br/>
        {/* User Name: {name} */}
        {status === 0 ? (
          <Typography.Text className="text-red-500">Under Review 😇</Typography.Text>
        ) : status === 1 ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "green" }}>Approved 😃</p>
            <Button
              type="primary"
              onClick={() => handleSpinClick(id)}
              style={{
                borderRadius: "999px",
              }}
            >
              Spin Now
            </Button>
          </div>
        ) : null}
        <br/>
        <Typography.Text type="secondary" className="mb-0">
          {formattedDate}
        </Typography.Text>
      </div>
              
      </div>
    </Card>
  );
};

export default Request;
