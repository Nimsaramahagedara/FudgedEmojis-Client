import Title from "antd/es/typography/Title";
import React, { useEffect, useRef, useState } from "react";
import { Segmented, Space, Table, Tag,Button } from "antd";
import axios from "../../../axios-config";
import moment from "moment";
import PrintComponent from "../../components/PrintComponent";


const Completed = () => {
  const [request, setRequest] = useState([]);
  const table = useRef(null);

  


  const handleFilter = (value)=>{
    console.log(value);
  }

  useEffect(() => {
    axios
      .get(`/request/completed`)
      .then((res) => {
        setRequest(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sendRequestWithKeys = request.map((item) => ({
    ...item,
    key: item._id,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "spinBy",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Reciept No",
      dataIndex: "receiptNo",
      key: "recieptNo",
    },
    {
      title: "Request Date",
      dataIndex: "createdAt",
      key: "date",
      render: (text) => moment(text).format("DD-MMM-YYYY"),
    },
    {
      title: "Voucher Type",
      key: "type",
      dataIndex: "voucherType",
      render: (_, record) => {
        const color = record.voucherType === "Amazon" ? "green" : "geekblue";

        return <Tag color={color}>{record.voucherType}</Tag>;
      },
    },
    {
      title: "Spin Result",
      dataIndex: "spinnerResult",
      key: "result",
      render: (text) => <span>{text}%</span>,
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => <Tag color={"green"}>{"Completed"}</Tag>,
    },
  ];

  return (
    <div >
      <Title level={3} className="text-center my-3">
        Completed
      </Title>
      <hr className="my-4" />
      <Segmented options={['All','Daily', 'Weekly', 'Monthly', 'Yearly']} onChange={handleFilter} />
      <PrintComponent componentRef={table}/>
      <Table
        ref={table}
        dataSource={sendRequestWithKeys}
        columns={columns}
        className="overflow-x-auto"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Completed;
