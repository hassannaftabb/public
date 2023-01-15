import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAllPlaces } from '../../services/getAllPlaces';
import moment from 'moment';
import { updatePlaceStatusApi } from '../../services/updatePlaceStatus';
import { toast } from 'react-hot-toast';

const TableComp = () => {
  const [places, setPlaces] = useState([]);
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    const getPlaces = async () => {
      const response = await getAllPlaces();
      if (response.status === 201) {
        setPlaces(response.data.data);
      } else if (response.status === 401) {
        toast.error('Unauthorized');
        setTimeout(() => {
          window.location = '/login';
        }, 1500);
      }
    };
    getPlaces();
  }, []);
  const updateStatus = async (id, status) => {
    const response = await updatePlaceStatusApi({
      placeId: id,
      status: status,
      token: localStorage.getItem('token'),
    });
    if (response.status === 201) {
      toast.success('Status updated!');
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else if (response.status === 401) {
      toast.error('Unauthorized');
      setTimeout(() => {
        window.location = '/login';
      }, 1500);
    } else {
      toast.error('Could not update status!');
    }
  };
  return (
    <div className='w-full overflow-auto bg-white p-4 rounded-xl'>
      <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ background: '#314668' }}>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: '700', color: 'white' }}
                align='center'
                className='border-r-[1px] border-gray-400 rounded-tl-[30px]'
              >
                Nodel Department
              </TableCell>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: '700', color: 'white' }}
                align='center'
                className='border-r-[1px] border-gray-400'
              >
                Site Name
              </TableCell>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: '700', color: 'white' }}
                align='center'
                className='border-r-[1px] border-gray-400'
              >
                Site Incharge Name
              </TableCell>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: '700', color: 'white' }}
                align='center'
                className='border-r-[1px] border-gray-400'
              >
                SSO Id
              </TableCell>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: '700', color: 'white' }}
                align='center'
                className='border-r-[1px] border-gray-400'
              >
                Mob No.
              </TableCell>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: '700', color: 'white' }}
                align='center'
                className='border-r-[1px] border-gray-400'
              >
                Status
              </TableCell>
              <TableCell
                sx={{ fontSize: '16px', fontWeight: '700', color: 'white' }}
                align='center'
                className='border-r-[1px] border-gray-400'
              >
                Modify by
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: 'white',
                  // borderTopRightRadius: '4px',
                }}
                align='center'
                className='border-r-[1px] border-gray-400 rounded-tr-[30px]'
              >
                Modify Date
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: 'white',
                  backgroundColor: 'white',
                  borderBottom: 0,
                }}
                className='border-r-[1px] border-gray-400'
                align='right'
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {places?.map((el) => (
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1E1E1E80',
                  }}
                  component='th'
                  scope='row'
                  align='center'
                  className='border-r-[1px] border-gray-400'
                >
                  {el?.nodalDepartment}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1E1E1E80',
                  }}
                  align='center'
                  className='border-r-[1px] border-gray-400'
                >
                  {el?.placeName}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1E1E1E80',
                  }}
                  align='center'
                  className='border-r-[1px] border-gray-400'
                >
                  Mr. Anil
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1E1E1E80',
                  }}
                  align='center'
                  className='border-r-[1px] border-gray-400'
                >
                  {el?.ssoId}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1E1E1E80',
                  }}
                  align='center'
                  className='border-r-[1px] border-gray-400'
                >
                  98xxxxxxxx
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1E1E1E80',
                  }}
                  align='center'
                  className='border-r-[1px] border-gray-400'
                >
                  {el?.status == 1 ? 'Active' : 'Deactivated'}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1E1E1E80',
                  }}
                  align='center'
                  className='border-r-[1px] border-gray-400'
                >
                  {el?.ssoId}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#1E1E1E80',
                    height: '100%',
                    borderBottomRightRadius: '4px',
                  }}
                  align='center'
                  className='border-r-[1px] border-gray-400'
                >
                  {moment(el?.updatedAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: 'bg-white',
                    borderBottom: 0,
                  }}
                  align='right'
                  className='border-r-[1px] border-gray-400'
                >
                  <div className='flex w-full justify-end gap-x-4'>
                    <button
                      className='px-3  text-white bg-[#3C5071] rounded-[4px]'
                      onClick={() => setOpen(!open)}
                    >
                      View
                    </button>
                    <button className='px-3  text-white bg-[#3C5071] rounded-[4px]'>
                      Edit
                    </button>
                    <div className='flex flex-col gap-[3px] font-[500]'>
                      <button
                        className={`text-xs px-2.5 py-[0.5px] bg-[#139907] text-white rounded-[4px] ${
                          el?.status == 1 && 'opacity-70 cursor-not-allowed'
                        }`}
                        disabled={el?.status == 1}
                        onClick={() => updateStatus(el?.placeId, 1)}
                      >
                        Active
                      </button>
                      <button
                        className={`text-xs px-2.5 py-[0.5px] bg-[#8A070F] text-white rounded-[4px] ${
                          el?.status == 0 && 'opacity-70 cursor-not-allowed'
                        }`}
                        onClick={() => updateStatus(el?.placeId, 0)}
                        disabled={el?.status == 0}
                      >
                        Deactive
                      </button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
