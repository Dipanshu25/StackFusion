import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "antd";
import React from "react";

import "./list.css";

function ListComp() {
  const [dataTable, setDataTable] = useState([]);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5009/listRequest")
      .then((res) => {
        setDataTable(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setNewData(dataTable);
    console.log("new data", dataTable);
  }, [dataTable]);

  const column = [
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
      render: (raisedon) => {
        if (raisedon.includes("T")) {
          return <p>{raisedon.split("T")[0]}</p>;
        }
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];
  return (
    <Table
      dataSource={newData}
      columns={column}
      pagination={true}
      bordered
      size="large"
      className="table"
    />
  );
}

export default ListComp;
