import React from 'react';
import { BiPrinter } from 'react-icons/bi';

const TopPart = ({ ticket, print }) => {
  return (
    <div className='w-[100%] relative'>
      {/* -------- logo section -------- */}
      <div className='bg-[#F0EBEB] rounded-lg flex justify-center pt-[27px] pb-[1rem]'>
        <img src='/Logo2.png' alt='' />
      </div>
      {/* ------- print button -------- */}
      <button
        className='absolute bottom-[5%] right-[2%] bg-[#3C5071] text-white flex items-center px-5 py-2 rounded-md gap-2 text-sm'
        onClick={print}
      >
        <BiPrinter /> Print PDF
      </button>
    </div>
  );
};

export default TopPart;
