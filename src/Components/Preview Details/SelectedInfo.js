import React from 'react';
import { useNavigate } from 'react-router-dom';
import FifthGroup from '../Booking Info/FifthGroup';
import FirstGroup from './FirstGroup';
import FourthGroup from './FourthGroup';
import SecondGroup from './SecondGroup';
import TableComp from './TableComp';
import ThirdGroup from './ThirdGroup';
import TimingSection from './TimingSection';
import { ButtonMd } from '../../Components/Shared/Constant';
import { FormControl, MenuItem, Select } from '@mui/material';
const SelectedInfo = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-[24px]'>
      {/* ------ first group ------- */}
      <FirstGroup />
      {/* ------ second group ----- */}
      <SecondGroup />
      {/* ------ third group ------- */}
      <ThirdGroup />
      {/* ------ fourth group ------ */}
      <FourthGroup />
      {/* ------ fifth group ------ */}
      <FifthGroup />
      {/* ----- timing section ----- */}
      <div>
        <h1 className='ml-[20px] lg:ml-0 text-[24px] font-[600] text-[#626262] mb-[1rem]'>
          Timing
        </h1>
        <TimingSection />
      </div>
      {/* ----- bottom table ----- */}
      <div>
        <h1 className='ml-[20px] lg:ml-0 text-[24px] font-[600] text-[#626262] mb-[1rem]'>
          A/C Details
        </h1>
        <div className='w-full overflow-auto'>
          {/* -------- 1st table -------- */}
          <div>
            {/* ------ heading row ------ */}
            <div className='grid grid-cols-9 w-full text-center overflow-auto'>
              {/* ------ data -------- */}
              <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px] rounded-tl-[5px] rounded-bl-[5px]'>
                  Type Of A/C
                </h1>
              </div>
              {/* ------ data -------- */}
              <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                  Name Of A/C
                </h1>
              </div>
              {/* ------ data -------- */}
              <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                  Bank Name:
                </h1>
              </div>
              {/* ------ data -------- */}
              <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                  A/C Number:
                </h1>
              </div>
              {/* ------ data -------- */}
              <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                  IFSC code:
                </h1>
              </div>
              {/* ------ data -------- */}
              <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                  Branch:
                </h1>
              </div>
              {/* ------ data -------- */}
              <div className='w-full h-[44px] col-span-3  border-gray-400'>
                <h1 className='bg-[#3C5071] text-center h-[50%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px] rounded-tr-[5px]'>
                  Price Category:
                </h1>
                <div className='grid grid-cols-4 h-[50%] border-t-[1px] text-white'>
                  <h6 className='pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400'>
                    Indian Citizen
                  </h6>
                  <h6 className='pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400'>
                    Foreigner Citizen
                  </h6>
                  <h6 className='pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400'>
                    Indian student
                  </h6>
                  <h6 className='pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate rounded-br-[5px]'>
                    Foreigner student
                  </h6>
                </div>
              </div>
              {/* <div className='w-full h-[44px] '>
                        <h1 className=' h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]'></h1>
                      </div> */}
            </div>

            {/* -------- data row ------ */}
            {/* -------- data row ------ */}
            <div className='grid grid-cols-9 w-full overflow-auto'>
              {/* ------ data -------- */}
              <div className=' h-[44px] border-r-[1px] border-gray-400'>
                <div className='bg-[white] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]'>
                  <FormControl className='focus:border-none bg-white  !text-gray-300 w-full h-10'>
                    <Select
                      // value={accountType}
                      // onChange={(e) => setaccountType(e.target.value)}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      className='w-full h-10 !text-gray-400 '
                      defaultValue='1'
                      disabled
                    >
                      {/* {options?.map((el) => (
                        <MenuItem value={el}>{el}</MenuItem>
                      ))} */}
                    </Select>
                  </FormControl>
                </div>
              </div>
              {/* ------ data -------- */}
              <div className=' h-[44px] border-r-[1px] border-gray-400'>
                <input
                  // onChange={(e) => setaccountName(e.target.value)}
                  className='w-[100%] h-[100%] focus:outline-none text-black p-2'
                  type='text'
                  placeholder='Type here'
                  disabled
                />
              </div>
              {/* ------ data -------- */}
              <div className=' h-[44px] border-r-[1px] border-gray-400'>
                <div className='bg-[white] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]'>
                  <FormControl className='focus:border-none bg-white  !text-gray-300 w-full h-10'>
                    <Select
                      // value={accountName}
                      // onChange={(e) => setbankName(e.target.value)}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      className='w-full h-10 !text-gray-400 '
                      defaultValue='1'
                      disabled
                    >
                      {/* {options?.map((el) => (
                        <MenuItem value={el}>Select Here</MenuItem>
                      ))} */}
                    </Select>
                  </FormControl>
                </div>
              </div>
              {/* ------ data -------- */}
              <div className=' h-[44px] border-r-[1px] border-gray-400'>
                <input
                  // onChange={(e) => setaccountNo(e.target.value)}
                  className='w-[100%] h-[100%] focus:outline-none text-black p-2'
                  type='text'
                  placeholder='Type here'
                  disabled
                />
              </div>
              {/* ------ data -------- */}
              <div className=' h-[44px] border-r-[1px] border-gray-400'>
                <input
                  // onChange={(e) => setifscCode(e.target.value)}
                  className='w-[100%] h-[100%] focus:outline-none text-black p-2'
                  type='text'
                  placeholder='Type here'
                  disabled
                  // disabled={accountType === 'Budget Account'}
                />
              </div>
              {/* ------ data -------- */}
              <div className=' h-[44px] border-r-[1px] border-gray-400'>
                <input
                  // onChange={(e) => setbranch(e.target.value)}
                  className='w-[100%] h-[100%] focus:outline-none text-black p-2'
                  type='text'
                  placeholder='Type here'
                  disabled
                  // disabled={accountType === 'Budget Account'}
                />
              </div>
              {/* ------ data -------- */}
              <div className='col-span-3 h-[44px] '>
                <div className='grid grid-cols-4 h-[100%] border-t-[1px] bg-white text-xs '>
                  <input
                    // onChange={(e) => setindCitizen(e.target.value)}
                    className='h-full p-2 truncate border-r-[1px] border-gray-400'
                    type='text'
                    placeholder='Indian Citizen'
                    disabled
                  />
                  <input
                    // onChange={(e) => setforeignCitizen(e.target.value)}
                    className='h-full p-2 truncate border-r-[1px] border-gray-400'
                    type='text'
                    placeholder='Foreigner Citizen'
                    disabled
                  />
                  <input
                    // onChange={(e) => setindStudent(e.target.value)}
                    className='h-full p-2 truncate border-r-[1px] border-gray-400'
                    type='text'
                    placeholder='Indian student'
                    disabled
                  />
                  <input
                    // onChange={(e) => setforeignStudent(e.target.value)}
                    className='h-full p-2 truncate '
                    type='text'
                    placeholder='Foreigner student'
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom buttons  */}
      <div className='flex justify-center gap-[10px] lg:gap-[20px] w-[100%] mt-[88px]'>
        <ButtonMd text='Edit' />
        <ButtonMd text='Cancel' onClick={() => navigate('/view')} />
        <span onClick={() => navigate('/view')}>
          <ButtonMd text='Submit' />
        </span>
      </div>
    </div>
  );
};

export default SelectedInfo;
