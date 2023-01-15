import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonMd } from '../Components/Shared/Constant';
const Success = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className='h-screen flex justify-center items-center whitespace-nowrap'>
      <div className='bg-[#F0EBEB] w-full max-w-4xl flex flex-col items-center gap-[60px] py-12 rounded-xl'>
        {/* ---- image div ----- */}
        <div className='flex justify-center'>
          <img
            className=' h-44 object-contain'
            src='/right-icon.png'
            alt='success'
          />
        </div>
        <div className='flex flex-col items-center gap-[44px]'>
          <h1 className='text-[24px] lg:text-[40px] font-[600]'>
            Payment Done Successfully
          </h1>
          <span onClick={() => navigate(`/ticket/${id}`)}>
            <ButtonMd text={'OK'} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Success;
