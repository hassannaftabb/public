import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { FiUpload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FifthGroup = () => {
  // ------ dropdown state -----
  const [account, setAccount] = React.useState(1);

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  return (
    <div className='flex flex-row flex-wrap items-center gap-[10px]'>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          booking for:
        </p>
        <FormControl className=''>
          <Select
            value={account}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className='w-96 shadow-md  h-12 bg-white !text-gray-400'
            disabled
          >
            {options?.map((el) => (
              <MenuItem value={el}>Counter Booking</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          visiter form type:
        </p>
        <div className='flex items-center gap-[24px] focus:outline-none   w-96'>
          <label className='w-full cursor-pointer' htmlFor='siteImage'>
            <p className='text-gray-400 text-[#00000080] font-[500] bg-white flex items-center justify-start p-3 gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md '>
              Attach File
            </p>
            <input
              className='hidden'
              type='file'
              name='siteImage'
              id='siteImage'
              disabled
            />
          </label>
        </div>
      </div>

      <div className='flex items-end justify-start gap-8 w-56 flex-row-reverse'>
        <div className='w-full'>
          <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
            help desk no:
          </p>
          <input
            placeholder='123-456-7890'
            className='focus:outline-none h-12 rounded p-3 overflow-hidden border border-gray-400/70 shadow-md w-full'
            type='text'
            disabled
          />
        </div>
        {/* <button className='bg-[#3C5071] h-11 px-5 text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'>
          View
        </button> */}
      </div>
      {/* <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          Assign role:
        </p>
        <FormControl className=''>
          <Select
            value={account}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            className='w-96 shadow-md  h-12 bg-white !text-gray-400'
          >
            <MenuItem value={1}>admin</MenuItem>
            <MenuItem value={2}>Ticket Counter</MenuItem>
          </Select>
        </FormControl>
      </div> */}
    </div>
  );
};

export default FifthGroup;
