import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ContextProvider';

import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState,useEffect } from 'react';
import axios from 'axios';
import AddEvent from '../components/datatable/AddEvent';
import Button from 'react-bootstrap/esm/Button';
const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);
const Latest = () => {
  const [latestEvent,getLatestEvent]= useState([]);
  // const [status,setStatus]= useState('');
  let status="";
  useEffect(() => {
    axios.get(`/api/latestEvent`).then((res) => {
        if (res.data.status === 200) {
            getLatestEvent(res.data.event);
        }
    });
}, []);
  
const handleAdd = () => {
 return(<AddEvent/>);
};

  return (
    <><div className="modal fade" id="EditModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Add Event</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style={{ backgroundColor: "white", color: "black" }}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <AddEvent />
          </div>
          
        </div>
      </div>
    </div><div className="mt-14 ml-14 mr-14">
        <p className="text">Latest events</p>
        <Button style={{ marginLeft: "50rem", marginTop: "-3rem", backgroundColor: "green", color: "white", borderColor: "green" }}
          data-bs-toggle="modal" data-bs-target="#EditModal"> Add Event</Button>
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell"> ID</TableCell>
                <TableCell className="tableCell">Events</TableCell>

                <TableCell className="tableCell">Start Date</TableCell>

                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {latestEvent.map((item) => (
                <TableRow key={item.event_id}>
                  <TableCell className="tableCell">{item.event_id}</TableCell>
                  {/* <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </TableCell> */}

                  <TableCell className="tableCell">{item.event_name}</TableCell>
                  <TableCell className="tableCell">{item.start_date}</TableCell>
                  {(item.event_status == 1) ?

                    <span style={{ color: "green", align: "bottom" }}>Approved</span>
                    :
                    <span style={{ color: "yellow" }}>Pending</span>}
                  <TableCell className="tableCell"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div></>
  );
};

export default Latest;
