import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export const demoImg =
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80';
const NavBar = () => {
  return (
    <nav className='bg-[#314668]  px-2 rounded-xl mx-auto py-8'>
      <div className=' text-gray-100 flex items-center justify-between'>
        <div className='w-full'>
          <img src='/logo.png' className='h-14 rounded-lg ' alt='' />
        </div>
        <div className='flex items-center justify-center space-x-12 w-full text-[15px] font-extralight'>
          <Link to='/'>Home</Link>
          <Link to='/'>Reports</Link>
          <Link to='/'>Help & Support</Link>
        </div>
        <div className='flex gap-[25px] items-center w-full justify-end'>
          <img src='/bell.png' className='h-[34px] rounded-lg ' alt='' />
          <div className='flex items-center gap-3'>
            <div className='text-right '>
              <h2 className='text-lg font-medium text-yellow-400 tracking-wide '>
                Mr. Pawan
              </h2>
              <p className='h-[1px] w-full bg-gray-500 rounded-full my-0.5'></p>
              <p className='text-sm '>Hawa Mahal</p>
            </div>
            <img
              src={demoImg}
              className='h-9 w-9 rounded-full shadow-2xl shadow-[#000000]'
              alt=''
            />
            <div
              onClick={() => {
                localStorage.clear();
                window.location = '/login';
              }}
              className='cursor-pointer'
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
