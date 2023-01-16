import React, { useState } from 'react';
import SecondNav from '../Components/Shared/SecondNav';
import { bannerImg } from '../Pages/home/Home2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FormControl, MenuItem, Select } from '@mui/material';
import { FiUpload } from 'react-icons/fi';
import { getPlaceById } from '../services/getPlaceById';
import { Calendar } from 'primereact/calendar';

const API_URL = process.env.REACT_APP_API_URL;
const BookingInfo = () => {
  const { id } = useParams();
  const [place, setPlace] = useState({});
  React.useEffect(() => {
    const getPlace = async () => {
      const response = await getPlaceById({
        placeId: parseInt(id),
        token: localStorage.getItem('token'),
      });
      setPlace(response.data.data);
    };
    getPlace();
  }, [id]);
  const [sso_id, setsso_id] = useState();
  const [name, setname] = useState();
  const [contact_no, setcontact_no] = useState();
  const [email_id, setemail_id] = useState();
  const [booking_for, setbooking_for] = useState();
  const [visitor_form_type, setvisitor_form_type] = useState();
  const [role, setrole] = useState();
  const [help_desk_no, sethelp_desk_no] = useState();
  const [winter_session_start_time, setwinter_session_start_time] = useState();
  const [winter_session_end_time, setwinter_session_end_time] = useState();
  const [summer_session_start_time, setsummer_session_start_time] = useState();
  const [summer_session_end_time, setsummer_session_end_time] = useState();
  const [range, setRange] = useState(false);
  const [holiday_session, setholiday_session] = useState(null);

  const [dateInputsnum, setDateInputNums] = useState([1]);

  React.useEffect(() => {
    if (sso_id === '123456') {
      setname('hassan');
      setcontact_no(90909090);
      setemail_id('hassannaftabb@gmail.com');
    }
  }, [sso_id]);

  console.log(name, contact_no, email_id);

  const options = ['Taj', 'Hawa', 'jm', 'pm', 'lorem'];
  const optionsFor = ['Hawa Mahal'];
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const data = new FormData();
    console.log(visitor_form_type, 'files');
    data.append('sso_id', sso_id);
    data.append('name', name);
    data.append('contact_no', contact_no);
    data.append('email_id', email_id);
    data.append('booking_for', booking_for);
    data.append('visitor_form_type', visitor_form_type);
    data.append('role', role);
    data.append('help_desk_no', help_desk_no);
    data.append('winter_session_start_time', winter_session_start_time);
    data.append('winter_session_end_time', winter_session_end_time);
    data.append('summer_session_start_time', summer_session_start_time);
    data.append('summer_session_end_time', summer_session_end_time);
    data.append('holiday_session', holiday_session);
    data.append('place_id', id);
    e.preventDefault();
    axios
      .post(API_URL + 'sso_details', data, {
        'Content-Type': 'multipart/form-data',
      })
      .then(() => {
        navigate(`/account-category/${id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='min-h-screen bg-[#F0EBEB]'>
      <div className='relative '>
        <SecondNav />
        <div className='container mx-auto w-full absolute inset-x-0 top-5'>
          <div className='relative w-full'>
            <img
              src={bannerImg}
              className='h-14 w-20 object-cover absolute top-0 right-0 rounded-md border border-gray-500'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className=' pb-16'>
        <div className=''>
          <div className='  bg-white'>
            <div className='container px-6 mx-auto  space-y-5 pt-10 pb-14'>
              {/* ------- first group ------ */}
              <div className='h-[100%] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-[150px]'>
                {/* ----- select side ----- */}
                <div className='flex flex-col lg:flex-row items-center gap-[30px]'>
                  <div>
                    <p className=' text-gray-400 text-2xl font-semibold mb-3 capitalize'>
                      nodal department:
                    </p>
                    <FormControl className=''>
                      {/* {Object.keys(place).length > 0 && ( */}
                      <Select
                        disabled
                        value={place?.nodalDepartment}
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='w-96 shadow-md h-12 bg-white'
                      >
                        {options?.map((el) => (
                          <MenuItem value={el}>{el}</MenuItem>
                        ))}
                      </Select>
                      {/* )} */}
                    </FormControl>
                  </div>
                  <div>
                    <p className=' text-gray-400 text-2xl font-semibold mb-3 capitalize'>
                      tourist place type:
                    </p>
                    <FormControl className=''>
                      {/* {Object.keys(place).length > 0 && ( */}
                      <Select
                        disabled
                        value={place?.touristPlaceType}
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='w-96 shadow-md  h-12 bg-white !text-gray-400'
                      >
                        {options?.map((el) => (
                          <MenuItem value={el}>{el}</MenuItem>
                        ))}
                      </Select>
                      {/* )} */}
                    </FormControl>
                  </div>
                </div>
              </div>

              {/* ------ second group ------- */}
              <div className='flex flex-row flex-wrap items-center gap-[10px]'>
                <div>
                  <p className='text-gray-400 text-2xl font-semibold mb-3 capitalize'>
                    City:
                  </p>
                  <FormControl className=''>
                    {/* {Object.keys(place).length > 0 && ( */}
                    <Select
                      disabled
                      value={place?.city}
                      inputProps={{ 'aria-label': 'Without label' }}
                      className='w-96 shadow-md h-12 bg-white !text-gray-400'
                    >
                      {options?.map((el) => (
                        <MenuItem value={el}>{el}</MenuItem>
                      ))}
                    </Select>
                    {/* )} */}
                  </FormControl>
                </div>
                <div>
                  <p className='text-gray-400 text-2xl font-semibold mb-3 capitalize'>
                    place name:
                  </p>
                  {/* {Object.keys(place).length > 0 && ( */}
                  <input
                    disabled
                    className='focus:outline-none p-3 bg-white h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
                    type='text'
                    value={place?.placeName}
                    placeholder='Hawa Mahal'
                  />
                  {/* )} */}
                </div>
                <div>
                  <p className='text-gray-400 text-2xl font-semibold mb-3 capitalize'>
                    GIS Locations
                  </p>
                  {/* {place?.place_coordinate_latitude &&
                    place?.place_coordinate_longitude && ( */}
                  {/* <div> */}
                  {/* <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                    GIS location:
                  </p> */}
                  <input
                    placeholder='26.9239° N, 75.8267° E'
                    className='focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96 bg-white'
                    type='text'
                    value={
                      place?.place_coordinate_latitude &&
                      `${place?.place_coordinate_latitude},${place?.place_coordinate_longitude} `
                    }
                    disabled
                  />
                  {/* </div> */}
                  {/* )} */}
                </div>
              </div>
              {/* -------- third group -------  */}
              <div className='flex flex-wrap items-center lg:items-end gap-[24px] lg:gap-[30px]'>
                {/* ----- 1st input ----- */}
                <div>
                  <p className='text-gray-400 text-2xl font-semibold mb-3 capitalize'>
                    Address:
                  </p>
                  <input
                    // placeholder='Type Here'
                    className='focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96 bg-white'
                    type='text'
                    disabled
                    value={place?.address}
                  />
                </div>

                {/* -------- site image: ------- */}
                <div>
                  <p className='text-gray-400 text-2xl font-semibold mb-3 capitalize'>
                    site image:
                  </p>
                  <div className='flex items-center gap-[24px] focus:outline-none w-72'>
                    <label className='w-full ' htmlFor='siteImage'>
                      <p className='text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md '>
                        <span>
                          <FiUpload />
                        </span>{' '}
                        Upload
                      </p>
                      <input
                        disabled
                        className='hidden'
                        type='file'
                        name='siteImage'
                        id='siteImage'
                      />
                    </label>
                  </div>
                </div>

                {/* -------- image for ticket: ------- */}
                <div>
                  <p className='text-gray-400 text-2xl font-semibold mb-3 capitalize'>
                    image for ticket:
                  </p>
                  <div className='flex items-center gap-[24px] focus:outline-none  w-72'>
                    <label className='w-full' htmlFor='siteImage'>
                      <p className='text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md '>
                        <span>
                          <FiUpload />
                        </span>{' '}
                        Upload
                      </p>
                      <input
                        disabled
                        className='hidden'
                        type='file'
                        name='siteImage'
                        id='siteImage'
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#F0EBEB]'>
            <div className='container mx-auto px-6 space-y-5'>
              {/* ------- ssoid group ------- */}
              <div className='pt-10 border-gray-400'>
                <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                  {' '}
                  SSO Id:
                </p>
                <input
                  onChange={(e) => setsso_id(e.target.value)}
                  placeholder='Type Here'
                  name='sso_id'
                  className='focus:outline-none h-12 rounded overflow-hidden border border-gray-400/70 p-2 shadow-md w-96'
                  type='text'
                />
              </div>
              {/* ----- fourth group ------ */}
              <div className='flex flex-row flex-wrap items-center gap-[10px]'>
                {/* ------ Name: ----- */}

                <div>
                  <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                    {' '}
                    Name:
                  </p>
                  <input
                    onChange={(e) => setname(e.target.value)}
                    name='name'
                    value={name}
                    // placeholder='Type Here'
                    className='focus:outline-none h-12 rounded overflow-hidden border p-2 border-gray-400/70 shadow-md w-96 bg-white'
                    type='text'
                    disabled
                  />
                </div>

                {/* ------ Contact No: ----- */}
                <div>
                  <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                    Contact No:
                  </p>
                  <input
                    onChange={(e) => setcontact_no(e.target.value)}
                    name='contact_no'
                    value={contact_no}
                    // placeholder='Type Here'
                    className='focus:outline-none h-12 rounded overflow-hidden border p-2 border-gray-400/70 shadow-md w-96 bg-white'
                    type='tel'
                    disabled
                  />
                </div>

                {/* ------ Email ID ----- */}
                <div>
                  <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                    Email ID
                  </p>
                  <input
                    onChange={(e) => setemail_id(e.target.value)}
                    name='email'
                    value={email_id}
                    // placeholder='Type Here'
                    className='focus:outline-none h-12 rounded overflow-hidden border p-2 border-gray-400/70 shadow-md w-96 bg-white'
                    type='email'
                    disabled
                  />
                </div>
              </div>

              {/* ------- fifth group ------- */}
              <div className='flex flex-row flex-wrap items-center gap-[10px]'>
                <div>
                  <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                    booking for:
                  </p>
                  <FormControl className=''>
                    <Select
                      onChange={(e) => setbooking_for(e.target.value)}
                      value={booking_for}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      className='w-96 shadow-md  h-12 bg-white !text-gray-400'
                    >
                      {optionsFor?.map((el) => (
                        <MenuItem value={el}>{el}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                    visitor form type:
                  </p>
                  <div className='flex items-center gap-[10px] focus:outline-none   w-96'>
                    <label
                      className='w-full cursor-pointer'
                      htmlFor='visitor_form_type'
                    >
                      {/* <p className='text-gray-400 text-[#00000080] font-[500] bg-white flex items-center justify-start p-3 gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md '>
                        Attach File
                        <span>
                          <FiUpload />
                        </span>{' '}
                      </p> */}
                      <Select
                        onChange={(e) => setvisitor_form_type(e.target.value)}
                        value={visitor_form_type}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className='w-96 shadow-md  h-12 bg-white !text-gray-400'
                      >
                        {optionsFor?.map((el) => (
                          <MenuItem value={el}>{el}</MenuItem>
                        ))}
                      </Select>
                    </label>
                  </div>
                </div>
                <div className='flex items-end justify-start gap-8 w-96 flex-row-reverse'>
                  <div className='w-full'>
                    <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                      help desk no:
                    </p>
                    <input
                      onChange={(e) => sethelp_desk_no(e.target.value)}
                      placeholder='123-456-7890'
                      className='focus:outline-none h-12 rounded p-3 overflow-hidden border border-gray-400/70 shadow-md w-full'
                      // type='number'
                    />
                  </div>
                  {/* <button className='bg-[#3C5071] h-11 px-5 text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'>
                    View
                  </button> */}
                </div>
                <div>
                  <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
                    Assign role:
                  </p>
                  <FormControl className=''>
                    <Select
                      value={role}
                      onChange={(e) => setrole(e.target.value)}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      className='w-96 shadow-md  h-12 bg-white !text-gray-400'
                    >
                      <MenuItem value={1}>admin</MenuItem>
                      <MenuItem value={0}>Counter Staff</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              {/* ------- timing section -------- */}
              <div className='border-t w-full border-[#00000033] pt-4'>
                <h1 className='text-[24px] text-[#626262] font-[600]'>
                  Timing:
                </h1>
                {/* ------ PARENT DIV ------- */}
                <div className='flex items-end flex-wrap gap-8'>
                  {/* -------- left side inputs ------- */}
                  <div className='flex flex-col lg:flex-row items-center gap-8'>
                    {/* ----- Winter Session ------- */}
                    <div className=' '>
                      <h3 className='text-[20px] font-[600]'>Winter Session</h3>
                      <div className='flex items-center w-80 gap-0.5 '>
                        {/* ------- start time ------ */}
                        <div className='w-full'>
                          <p className='text-[14px]'>Start Time</p>
                          {/* <Calendar
                            showTime
                            showSeconds
                            hourFormat='24'
                             value={date2}
                             onChange={(e) => setDate2(e.value)}
                          ></Calendar> */}
                          <input
                            onChange={(e) =>
                              setwinter_session_start_time(e.target.value)
                            }
                            className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                            type='time'
                          />
                        </div>
                        {/* ------- end time ------ */}
                        <div className='w-full'>
                          <p className='text-[14px]'>End Time</p>
                          <input
                            onChange={(e) =>
                              setwinter_session_end_time(e.target.value)
                            }
                            className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                            type='time'
                          />
                        </div>
                      </div>
                    </div>

                    {/* ----- Summer Session ------- */}
                    <div className=''>
                      <h3 className='text-[20px] font-[600]'>Summer Session</h3>
                      <div className='flex items-center w-80 gap-0.5'>
                        {/* ------- start time ------ */}
                        <div className='w-full'>
                          <p className='text-[14px]'>Start Time</p>
                          <input
                            onChange={(e) =>
                              setsummer_session_start_time(e.target.value)
                            }
                            className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                            type='time'
                          />
                        </div>
                        {/* ------- end time ------ */}
                        <div className='w-full'>
                          <p className='text-[14px]'>End Time</p>
                          <input
                            onChange={(e) =>
                              setsummer_session_end_time(e.target.value)
                            }
                            className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                            type='time'
                          />
                        </div>
                      </div>
                    </div>
                    {/* ----- Holiday Session ------- */}
                    <div className=''>
                      <h3 className='text-[20px] font-[600] pt-5 pb-3'>
                        Holidays Date
                      </h3>
                      <div className='flex items-center w-96 gap-0.5 '>
                        {/* ------- start time ------ */}
                        {/* <div className='w-full'>
                          <p className='text-[14px]'> Start Date</p>
                          <input
                            onChange={(e) => setholiday_session(e.target.value)}
                            className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                            type='date'
                          />
                        </div>
                        <div className='w-full'>
                          <p className='text-[14px]'>End Period</p>
                          <input
                            onChange={(e) => setholiday_session(e.target.value)}
                            className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                            type='date'
                          />
                        </div> */}
                        <div className='grid grid-cols-3 gap-x-2'>
                          <div className='w-full flex items-start justify-center flex-col col-span-1'>
                            {dateInputsnum?.map(() => {
                              return (
                                <Calendar
                                  className='rounded-lg w-[150px] h-[54px]'
                                  id='picker2'
                                  name='date'
                                  onChange={(e) => setholiday_session(e.value)}
                                  value={holiday_session}
                                  minDate={new Date()}
                                  selectionMode={range ? 'range' : undefined}
                                  placeholder='DD/MM/YYYY'
                                />
                              );
                            })}

                            <div
                              className='text-black underline text-center ml-2 font-semibold cursor-pointer'
                              onClick={() => {
                                if (range) {
                                  setRange(false);
                                  setDateInputNums([0]);
                                  setholiday_session(null);
                                } else {
                                  setRange(true);
                                  setDateInputNums([0]);
                                  setholiday_session(null);
                                }
                              }}
                            >
                              {range ? 'SELECT SINGLE DATE' : 'DATE PERIOD'}
                            </div>
                          </div>

                          <button
                            disbaled={range ? true : false}
                            onClick={() => {
                              if (!range) {
                                let arr = [...dateInputsnum];
                                arr.push(Math.random());
                                setDateInputNums(arr);
                              }
                            }}
                            className='bg-[#3C5071] w-[53px] h-[54px] text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'
                          >
                            Add
                          </button>
                          <div className='flex gap-4 xl:-ml-4  mb-0.5'>
                            <button className='bg-[#3C5071] w-[145px] h-[54px] px-5 text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'>
                              Back
                            </button>
                            <button
                              className='bg-[#3C5071] w-[145px] h-[54px] px-5 text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'
                              onClick={() => navigate('/')}
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleSubmit}
                              className='bg-[#3C5071] w-[145px] h-[54px] px-[10px] text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                        {/* -------- button side --------- */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingInfo;
