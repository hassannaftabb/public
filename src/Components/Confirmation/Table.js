import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComp = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ background: '#F0EBEB', border: 0 }}>
              <TableCell sx={{ fontSize: '22px', fontWeight: '700' }}>
                Sr. No
              </TableCell>
              <TableCell
                sx={{ fontSize: '22px', fontWeight: '700' }}
                align='center'
              >
                Visit Date
              </TableCell>
              <TableCell
                sx={{ fontSize: '22px', fontWeight: '700' }}
                align='center'
              >
                Visitor Type :
              </TableCell>
              <TableCell
                sx={{ fontSize: '22px', fontWeight: '700' }}
                align='center'
              >
                No. Of Tourists :
              </TableCell>
              <TableCell
                sx={{ fontSize: '22px', fontWeight: '700' }}
                align='center'
              >
                Contact Information
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{
                  fontSize: '22px',
                  fontWeight: '500',
                  color: '#1E1E1E80',
                  borderRight: '4px',
                  borderColor: 'red',
                }}
                component='th'
                scope='row'
              >
                01
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '22px',
                  fontWeight: '500',
                  color: '#1E1E1E80',
                  borderRight: '4px',
                  borderColor: 'red',
                }}
                align='center'
              >
                29/12/2011
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '22px',
                  fontWeight: '500',
                  color: '#1E1E1E80',
                  borderRight: '4px',
                  borderColor: 'red',
                }}
                align='center'
              >
                Indian Citizen & Indian Student
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '22px',
                  fontWeight: '500',
                  color: '#1E1E1E80',
                  borderRight: '4px',
                  borderColor: 'red',
                }}
                align='center'
              >
                03
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '22px',
                  fontWeight: '500',
                  color: '#1E1E1E80',
                  borderRight: '4px',
                  borderColor: 'red',
                }}
                align='center'
              >
                +91 98XXXXXXXX
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
