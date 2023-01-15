import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondNav = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-[#D8EADC] py-2 shadow-lg rounded-[20px]'>
      <div className='container mx-auto px-6'>
        <img
          onClick={() => navigate('/')}
          className='cursor-pointer h-20 rounded-lg relative -left-5'
          src='/logo2.png'
          alt='logo'
        />
      </div>
    </div>
  );
};

export default SecondNav;
