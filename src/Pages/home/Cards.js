import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Cards = ({ data }) => {
  return (
    <div
      className={`${data.bgColor} w-[257px] h-[122px] rounded-sm relative text-white`}
    >
      <div className='flex items-center justify-between  py-1 px-3'>
        <div className=''>
          <h1 className='text-[40px] font-bold text-start'>{data.num}</h1>
          <p className='text-[14px] tracking-wider translate-y-[-70%] font-light'>
            {data.title}
          </p>
        </div>
        <data.icon className='text-5xl text-gray-600 opacity-60' />
      </div>
      <div className='cursor-pointer absolute bottom-0 w-[100%]'>
        <p
          className={`${
            data.footerColor
          } py-[3px] text-center rounded-b-[6px] flex items-center justify-center gap-[.3rem] text-[15px] ${
            data.title === 'Total Revenue' && 'text-black'
          }`}
        >
          More Info <BsFillArrowRightCircleFill />
        </p>
      </div>
    </div>
  );
};

export default Cards;
