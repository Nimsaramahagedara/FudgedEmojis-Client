import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TopNavBar from "../components/TopNavBar";
//import WheelComponent from "../components/WheelComponent";

import axios from "../../axios-config";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SpinWheel from "../components/SpinWheel";
import { toast } from "react-toastify";
import footerImg from '../assets/footer.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, overflow: "hidden" }}>{children}</Box>
      )}
    </div>
  );
}

function NewSpin() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [value, setValue] = useState(0);
  const [chances, setChances] = useState(1);
  const segments = [
    {
      color: '#db7093',
      value: '75'
    },
    {
      color: '#20b2aa',
      value: '70'
    },
    {
      color: '#d63e92',
      value: '65'
    },
    {
      color: '#daa520',
      value: '60'
    },
    {
      color: '#ff340f',
      value: '55'
    },
    {
      color: '#ff7f50',
      value: '50'
    },
    {
      color: '#3cb371',
      value: '45'
    },
    {
      color: '#4169e1',
      value: '40'
    }

  ];
  const segments2 = [
    {
      color: '#db7093',
      value: '105'
    },
    {
      color: '#20b2aa',
      value: '104'
    },
    {
      color: '#d63e92',
      value: '103'
    },
    {
      color: '#daa520',
      value: '102'
    },
    {
      color: '#ff340f',
      value: '101'
    },
    {
      color: '#ff7f50',
      value: '100'
    },
    {
      color: '#3cb371',
      value: '99'
    },
    {
      color: '#4169e1',
      value: '98'
    }

  ];
  const spinOutput = (winner) => {
    toast.success('Congratulations 🎉🎉!! You Won '+ winner + '%' + ' Voucher From Fudged');
    setChances(0);
    saveResultToDatabase(winner, "Amazon");

  };
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const accessToken = localStorage.getItem("token");

  const saveResultToDatabase = (result, selectedTab) => {
    const parsedResult = parseInt(result, 10);
  
    const data = {
      spinnerResult: parsedResult,
      voucherType: selectedTab,
    };

    axios
      .put(`/request/addresult/${id}`, data)
      .then((response) => {

        navigate("/");
      })
      .catch((error) => {
        console.error("Error saving result:", error);
      });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TopNavBar />
      <Typography variant="h6" color={"primary"} textAlign={"center"}>
        Chances Available {chances}
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Amazone" />
        <Tab label="Shopify" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SpinWheel segments={segments} spinOutput={spinOutput} chances={chances}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SpinWheel segments={segments2} spinOutput={spinOutput} chances={chances}/>
      </TabPanel>
      <div className="w-full bottom-0 left-0">
        <img src={footerImg} className="w-full h-full object-contain"/>
      </div>
    </>
  );
}

export default NewSpin;
