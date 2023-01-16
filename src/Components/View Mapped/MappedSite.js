import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const MappedSite = () => {
  return (
    <div>
      <p className='w-[100%] text-[#000000] text-[30px] font-[600] mb-[10px] capitalize'>
        mapped site:
      </p>
      <div className='flex items-end justify-between w-full'>
        <input
          className='focus:outline-none text-[14px] w-96 px-3 text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md'
          type='text'
          placeholder='Search'
        />
        <div className='flex items-center text-gray-500 '>
          <FaAngleLeft className='text-lg mb-0.5 hover:text-gray-800 cursor-pointer' />
          <span>1</span>
          <span className='mx-1'>TO</span>
          <span>200</span>
          <FaAngleRight className='text-lg mb-0.5 hover:text-gray-800 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default MappedSite;
