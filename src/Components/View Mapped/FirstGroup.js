import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const options = ['Hawa', 'jm', 'pm', 'lorem'];

const FirstGroup = ({ onTextFieldChange }) => {
  // ------ dropdown state -----
  const [account, setAccount] = useState();

  function onTextFieldChange(e) {
    setAccount(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div className='h-[100%] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-[150px]'>
      {/* ----- select side ----- */}
      <div className='flex flex-col lg:flex-row items-center gap-[30px]'>
        <div>
          <p className=' text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
            nodal department:
          </p>
          <FormControl className='' name='nodel_department'>
            <Select
              onChange={(e) => onTextFieldChange(e)}
              value={account}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className='w-96 shadow-md h-12 bg-white !text-gray-400'
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
          <FormControl
            className=''
            onChange={(e) => onTextFieldChange(e)}
            name='tourist_place_type'
          >
            <Select
              value={account}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className='w-96 shadow-md h-12 bg-white !text-gray-400'
              placeholder='Select'
            >
              {options?.map((el) => (
                <MenuItem value={el}>Select Here</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default FirstGroup;
