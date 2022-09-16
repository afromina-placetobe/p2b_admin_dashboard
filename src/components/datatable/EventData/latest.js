import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState,useEffect } from 'react';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function LatestEvents() {
 
    const [latestEvent,getLatestEvent]= useState([]);

    useEffect(() => {
        axios.get(`/api/latestEvent`).then((res) => {
            if (res.data.status === 200) {
                getLatestEvent(res.data.event);
            }
        });
    }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Event</StyledTableCell>
            <StyledTableCell align="right">Start date</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Organizer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {latestEvent?.map((item) => (
            <StyledTableRow key={item.event_id}>
              <StyledTableCell component="th" scope="row">
                {item.event_id}
              </StyledTableCell>
              <StyledTableCell align="right">{item.event_name}</StyledTableCell>
              <StyledTableCell align="right">{item.start_date}</StyledTableCell>
              <StyledTableCell align="right">{item.category}</StyledTableCell>
              <StyledTableCell align="right">{item.event_organizer}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
