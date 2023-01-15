import React from 'react';

const PaidAmount = ({ ticketFormik }) => {
  return (
    <div className='flex flex-col gap-[35px] mt-[40px]'>
      <input
        className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
        value={parseInt(ticketFormik.values.indianCitizenNo) * 50}
        onChange={ticketFormik.handleChange}
        id='indianCitizenPaidAmount'
        name='indianCitizenPaidAmount'
        type='number'
        disabled={true}
      />
      <input
        value={parseInt(ticketFormik.values.foreignCitizenNo) * 200}
        onChange={ticketFormik.handleChange}
        id='foreignCitizenPaidAmount'
        name='foreignCitizenPaidAmount'
        type='number'
        className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
        disabled={true}
      />
      <input
        value={parseInt(ticketFormik.values.indianStudentNo) * 20}
        onChange={ticketFormik.handleChange}
        id='indianStudentPaidAmount'
        name='indianStudentPaidAmount'
        type='number'
        className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
        disabled={true}
      />
      <input
        value={parseInt(ticketFormik.values.foreignStudentNo) * 100}
        onChange={ticketFormik.handleChange}
        id='foreignStudentPaidAmount'
        name='foreignStudentPaidAmount'
        type='number'
        className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
        disabled={true}
      />
    </div>
  );
};

export default PaidAmount;
