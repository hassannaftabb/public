import React, { useState } from 'react';
import { ButtonLg, ButtonMd } from '../Shared/Constant';

const BottomSection = ({ ticketFormik }) => {
  const [useEmail, setUseEmail] = useState(false);
  let totalVisitors =
    (ticketFormik.values.indianCitizen && ticketFormik.values.indianCitizenNo) +
    (ticketFormik.values.foreignCitizen &&
      ticketFormik.values.foreignCitizenNo) +
    (ticketFormik.values.indianStudent && ticketFormik.values.indianStudentNo) +
    (ticketFormik.values.foreignStudent &&
      ticketFormik.values.foreignStudentNo);
  return (
    <form
      className='flex flex-col lg:flex-row justify-between whitespace-nowrap mt-10'
      onSubmit={ticketFormik.handleSubmit}
    >
      {/* ------ left side ------- */}
      <div className=' w-full xl:w-7/12'>
        <h1 className='text-[24px] font-semibold tracking-wide'>
          Fill Contact Information:
        </h1>
        <div className='w-[100%] mt-[42px] flex flex-col lg:flex-row justify-between items-center gap-[1rem] space-x-4'>
          <ButtonMd
            text='MOBILE NO.'
            onClick={() => setUseEmail(false)}
            type='button'
          />
          <span className='text-[#000000] text-[20px] font-semibold'>OR</span>
          <ButtonMd
            text='EMAIL ID'
            onClick={() => setUseEmail(true)}
            type='button'
          />
        </div>
        <div className='mt-[32px]'>
          <input
            className='w-full h-20 border text-[#1E1E1E0] bg-white shadow-lg rounded-[10px] text-center'
            type={useEmail ? 'email' : 'text'}
            value={
              useEmail
                ? ticketFormik.values.emailId
                : ticketFormik.values.mobileNo
            }
            onChange={(e) => {
              if (useEmail) {
                ticketFormik.setFieldValue('emailId', e.target.value);
              } else {
                ticketFormik.setFieldValue('mobileNo', e.target.value);
              }
            }}
            required
          />
        </div>
      </div>
      {/* ------- right side -------- */}
      <div className='flex flex-col items-end justify-between pt-20 w-full'>
        <div className='bg-white text-xl text-[#1E1E1E80] shadow-lg  flex items-center px-4 py-2 gap-10 rounded-lg'>
          <p className=' '>
            Total Visitors:{' '}
            <span className='text-black font-bold text-[30px]'>
              {totalVisitors}
            </span>
          </p>
          <p className='h-full bg-black w-0.5 rounded-full'></p>
          <p className=''>
            Total Amount:{' '}
            <span className='text-black font-bold text-[30px]'>
              {ticketFormik.values.indianCitizenNo * 50 +
                ticketFormik.values.foreignCitizenNo * 200 +
                ticketFormik.values.indianStudentNo * 20 +
                ticketFormik.values.foreignStudentNo * 100}
            </span>
          </p>
        </div>
        <div className='inline-block'>
          <ButtonLg text={'SUBMIT'} type='submit' />
        </div>
      </div>
    </form>
  );
};

export default BottomSection;
