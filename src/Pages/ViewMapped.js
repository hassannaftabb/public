import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondNav from '../Components/Shared/SecondNav';
import MappedSite from '../Components/View Mapped/MappedSite';
import TableSection from '../Components/View Mapped/TableSection';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { FiUpload } from 'react-icons/fi';
const baseURL = `${process.env.REACT_APP_API_URL}place`;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ViewMapped = () => {
  const [file, setFile] = useState();

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const options = ['Taj', 'Hawa', 'jm', 'pm', 'lorem'];
  const navigate = useNavigate();
  const [nodel_department, setnodel_department] = useState();
  const [tourist_place_type, settourist_place_type] = useState();
  const [city, setcity] = useState();
  const [place_name, setplace_name] = useState();
  const [place_coordinate_longitude, setplace_coordinate_longitude] =
    useState();
  const [place_coordinate_latitude, setplace_coordinate_latitude] = useState();
  const [address, setaddress] = useState();
  const [site_image, setsite_image] = useState('');
  const [siteforticket, setsiteforticket] = useState('');
  const [student, setStudent] = useState({});
  console.log(nodel_department);
  const [account, setAccount] = useState();
  const [siteImageIUrl, setSiteImageUrl] = useState('');
  const [ticketImageIUrl, setTicketImageIUrl] = useState('');
  function onTextFieldChange(e) {
    setAccount(e.target.value);
    // console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    const data = new FormData();
    // {nodel_department:nodel_department, tourist_place_type:tourist_place_type, city:City, place_name:place_name,
    // 	place_coordinate:place_coordinate,address:address,site_image:site_image,siteforticket:siteforticket,
    // 	SSOtbl_id:'0',acdetails_id:'0',created_time:datetime,updated_time:datetime,status:'0'}
    data.append('nodel_department', nodel_department);
    data.append('tourist_place_type', tourist_place_type);
    data.append('city', city);
    data.append('place_name', place_name);
    data.append('place_coordinate_longitude', place_coordinate_longitude);
    data.append('place_coordinate_latitude', place_coordinate_latitude);
    data.append('address', address);
    data.append('site_image', site_image);
    data.append('siteforticket', siteforticket);
    data.append('status', 1);
    data.append('ssoId', localStorage.getItem('ssoId'));
    data.append('token', localStorage.getItem('token'));
    console.log(data);
    e.preventDefault();
    axios
      .post(baseURL, data, {
        'Content-Type': 'multipart/form-data',
      })
      .then((response) => {
        navigate(`/booking-info/${response.data.data.placeId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log('site_image', site_image);

  useEffect(() => {
    if (site_image !== '') {
      setSiteImageUrl(URL.createObjectURL(site_image));
    }
  }, [site_image]);
  useEffect(() => {
    if (siteforticket !== '') {
      setTicketImageIUrl(URL.createObjectURL(siteforticket));
    }
  }, [siteforticket]);

  return (
    <div className='min-h-screen bg-[#F0EBEB] '>
      <SecondNav onTextFieldChange={onTextFieldChange} />
      <div className='flex flex-col gap-[24px] container mx-auto pt-10 pb-16 px-6'>
        {/* ------- first group ------- */}
        <div className='h-[100%] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-[150px]'>
          {/* ----- select side ----- */}
          <div className='flex flex-col lg:flex-row items-center gap-[10px]'>
            <div>
              <p className=' text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                nodal department:
              </p>
              <FormControl className='' name='nodel_department'>
                <InputLabel id='nodel-label'>Select Here</InputLabel>
                <Select
                  onChange={(e) => setnodel_department(e.target.value)}
                  value={nodel_department}
                  labelId='nodel-label'
                  // inputProps={{ 'aria-label': 'Without label' }}
                  className='w-96 shadow-md h-12 bg-white !text-gray-400'
                  label='Select Here'
                >
                  {options?.map((el) => (
                    <MenuItem value={el}>{el}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <p className=' text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                tourist place type:
              </p>
              <FormControl className='' name='tourist_place_type'>
                <InputLabel id='tourist-label'>Select Here</InputLabel>
                <Select
                  onChange={(e) => settourist_place_type(e.target.value)}
                  value={tourist_place_type}
                  // inputProps={{ 'aria-label': 'Without label' }}
                  className='w-96 shadow-md h-12 bg-white !text-gray-400'
                  label='Select Here'
                  labelId='tourist-label'
                >
                  {options?.map((el) => (
                    <MenuItem value={el}>{el}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        {/* ------- second group --------- */}
        <div className='flex border-t border-gray-400 pt-5 mt-2 flex-row flex-wrap items-center gap-[10px]'>
          <div>
            <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
              City:
            </p>
            <FormControl className=''>
              <InputLabel id='city-label'>Select Here</InputLabel>
              <Select
                onChange={(e) => setcity(e.target.value)}
                name='city'
                value={city}
                labelId='city-label'
                // inputProps={{ 'aria-label': 'Without label' }}
                className='w-96 shadow-md h-12 bg-white !text-gray-400'
                label='Select Here'
              >
                {options?.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
              place name:
            </p>
            <FormControl className=''>
              {/* <InputLabel id='place-label'>Select Here</InputLabel> */}
              {/* <Select
                onChange={(e) => setplace_name(e.target.value)}
                value={place_name}
                // inputProps={{ 'aria-label': 'Without label' }}
                className='w-96 shadow-md h-12 bg-white !text-gray-400'
                label='Select Here'
                labelId='place-label'
              >
                {options?.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Select> */}
              <input
                onChange={(e) => setplace_name(e.target.value)}
                name='address'
                placeholder='Type Here'
                className='font-bold focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
                type='text'
              />
            </FormControl>
          </div>
          <div>
            <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
              GIS Location:
            </p>
            <div className='flex justify-center items-center h-12 rounded overflow-hidden border border-stone-400/40 shadow-md'>
              <input
                onChange={(e) => setplace_coordinate_longitude(e.target.value)}
                name='place_coordinate_longitude'
                className='w-48 lg:grow h-[100%] px-[.5rem] focus:outline-none'
                type='text'
                placeholder='Longitude'
              />
              <input
                onChange={(e) => setplace_coordinate_latitude(e.target.value)}
                name='place_coordinate_latitude'
                className='w-48 lg:grow h-[100%] px-[.5rem] focus:outline-none border-l-[2px]'
                type='text'
                placeholder='Latitude'
              />
            </div>
          </div>
        </div>
        {/* -------- third group ------ */}
        <div className='flex flex-wrap border-b border-gray-400 pb-8 items-center lg:items-end gap-[10px] lg:gap-[30px]'>
          {/* ----- 1st input ----- */}
          <div>
            <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
              Address:
            </p>
            <input
              //   onClick={handleOpen}
              onChange={(e) => setaddress(e.target.value)}
              name='address'
              placeholder='Type Here'
              className='focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
              type='text'
            />
          </div>

          {/* -------- site image: ------- */}
          <div>
            <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
              site image:
            </p>
            <div className='flex items-center gap-[10px] focus:outline-none w-72'>
              <label
                className='relative w-full cursor-pointer'
                htmlFor='siteImage'
              >
                <p className=' text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md '>
                  <span>
                    <FiUpload />
                  </span>{' '}
                  {site_image.name ? site_image.name : 'Upload'}
                </p>
                <input
                  accept='image/*'
                  onChange={(e) => {
                    setsite_image(e.target.files[0]);
                  }}
                  className='hidden'
                  type='file'
                  name='site_image'
                  id='siteImage'
                />
                {/* <span className='absolute bottom-0 my-auto'> {}</span> */}
              </label>

              <button
                onClick={handleOpen}
                className='w-[70px] flex-shrink-0  bg-[#3C5071] text-white py-2.5 rounded'
              >
                View
              </button>
              <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <img src={siteImageIUrl} alt='' />
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>

          {/* -------- image for ticket: ------- */}
          <div>
            <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
              image for ticket:
            </p>
            <div className='flex items-center gap-[10px] focus:outline-none w-72'>
              <label
                className='relative w-full cursor-pointer'
                htmlFor='siteforticket'
              >
                <p className='text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md '>
                  <span>
                    <FiUpload />
                  </span>{' '}
                  {siteforticket.name ? siteforticket.name : 'Upload'}
                </p>
                <input
                  accept='image/*'
                  onChange={(e) => {
                    setsiteforticket(e.target.files[0]);
                  }}
                  className='hidden'
                  type='file'
                  name='siteforticket'
                  id='siteforticket'
                />
                {/* <span className='absolute bottom-0 my-auto'> {}</span> */}
              </label>
              <button
                onClick={handleOpen2}
                className='w-[70px] flex-shrink-0  bg-[#3C5071] text-white py-2.5 rounded'
              >
                View
              </button>
              <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
              >
                <Fade in={open2}>
                  <Box sx={style}>
                    <img src={ticketImageIUrl} alt='' />
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>

          {/* -------- submit button ------ */}
          <button
            onClick={handleSubmit}
            className='w-[175px] bg-[#3C5071] text-white py-2.5 mb-0.5 rounded'
          >
            Submit
          </button>
        </div>
        {/* ------- mapped site -------- */}
        <MappedSite />
        {/* table section  */}
        <TableSection />
      </div>
    </div>
  );
};

export default ViewMapped;
