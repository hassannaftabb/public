import React from 'react';

const BottomTable = () => {
  return (
    <div className='flex   bg-[#FADEE5] h-20 mt-2 border-2 rounded-md border-gray-400  text-gray-600'>
      {/* ----- 1st ----- */}
      <h1 className='font-semibold text-sm border-r-2 border-gray-400  flex items-center justify-center px-5'>
        Opening Time
      </h1>
      {/* ---- 2nd ----- */}
      <div className='w-[226px] h-[100%] flex flex-col items-center'>
        {/* ----- top ----- */}
        <div className=' h-[50%] flex items-center'>
          <h1 className='pl-[1rem] font-semibold text-sm'>Opening Time</h1>
        </div>
        {/* ----- top ----- */}
        <div className='w-[100%] h-[50%] flex items-center justify-center border-t-2 border-gray-400 '>
          <h1 className='pl-[1rem] font-semibold text-sm text-center'>
            Opening Time
          </h1>
        </div>
      </div>
      {/* ------ 3rd ------ */}
      <div>
        <h1 className='h-[100%]  text-sm font-semibold pt-[10px] pl-[8px] border-l-2 border-gray-400 '>
          Holidays Date:
        </h1>
      </div>
    </div>
  );
};

export default BottomTable;
