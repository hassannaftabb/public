import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

const options = ['Taj', 'Hawa', 'jm', 'pm', 'lorem'];

const FirstGroup = ({ place }) => {
  // ------ dropdown state -----
  return (
    <div className='flex flex-row flex-wrap items-center gap-[10px]'>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          tourist place type:
        </p>
        <FormControl className=''>
          {/* {Object.keys(place).length > 0 && ( */}
          <Select
            // value={place?.touristPlaceType}
            inputProps={{ 'aria-label': 'Without label' }}
            className='w-96 shadow-md h-12 bg-white !text-gray-400'
            disabled
          >
            {options?.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
          {/* )} */}
        </FormControl>
      </div>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          nodal department:
        </p>
        <FormControl className=''>
          {/* {Object.keys(place).length > 0 && ( */}
          <Select
            // value={place?.nodalDepartment}
            inputProps={{ 'aria-label': 'Without label' }}
            className='w-96 shadow-md h-12 bg-white !text-gray-400'
            disabled
          >
            {options?.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Select>
          {/* )} */}
        </FormControl>
      </div>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          Address:
        </p>
        <input
          placeholder='Type Here'
          className='focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
          type='text'
          disabled
          // value={place?.address}
        />
      </div>
    </div>
  );
};

export default FirstGroup;
