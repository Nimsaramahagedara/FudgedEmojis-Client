import React from "react";
import { Card, Typography, Button } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
//import "antd/dist/antd.css";

const Request = ({ id, status, receipt, name, date }) => {
  const navigate = useNavigate();
  const formattedDate = moment(date).format("DD-MMM-YYYY, h-MM a");

  const handleSpinClick = (id) => {
    navigate(`/spin?id=${id}`);
  };

  return (
    <Card
      style={{
        margin: "0 auto",
        width:'100%' // Center the card horizontally
      }}
    >
      <div >
        <Typography.Title level={5}>Receipt No: {receipt}</Typography.Title>
        {/* <Typography.Paragraph>User Name: {name}</Typography.Paragraph> */}
        {status === 0 ? (
          <p style={{ color: "red" }}>Under Review 😇</p>
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
        <Typography.Text type="secondary">{formattedDate}</Typography.Text>
      </div>
    </Card>
  );
};

export default Request;











// import { Button, Typography } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import moment from "moment";

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';


// const Request = ({ id, status, receipt, name, date }) => {
//   const navigate = useNavigate();
//   const formattedDate = moment(date).format("DD-MMM-YYYY, h-MM a ");

//   const handleSpinClick = (id) => {
//     navigate(`/spin?id=${id}`);
//   };
//   return (
//     <Card className="filter backdrop-blur-lg">
//       <CardActionArea>
//       {/* <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         /> */}
//          <CardContent>
//         <Typography variant="subtitle1">Receipt No: {receipt}</Typography>
//         <Typography variant="subtitle2">User Name: {name}</Typography>
//         {status === 0 ? (
//           <p className="text-red-500">Under Review</p>
//         ) : status === 1 ? (
//           <div className="flex justify-between items-center">
//             <p className="text-green-500">Approved</p>
//             <Button
//               variant="contained"
//               color="success"
//               onClick={() => handleSpinClick(id)}
//               style={{
//                 borderRadius: "999px",
//               }}
//             >
//               Spin Now
//             </Button>
//           </div>
//         ) : null}
//         <Typography variant="caption">{formattedDate}</Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>

//   );
// };

// export default Request;
