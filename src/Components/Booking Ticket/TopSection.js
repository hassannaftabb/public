import React from 'react';
import NoOfSeats from './NoOfSeats';
import PaidAmount from './PaidAmount';
import VisitorType from './VisitorType';
import { Calendar } from 'primereact/calendar';

const TopSection = ({ ticketFormik }) => {
  return (
    <div className='flex flex-col xl:flex-row items-start justify-between gap-[70px] whitespace-nowrap'>
      {/* -------- select date side ---------- */}
      <div className='w-full lg:w-fit flex flex-col lg:flex-row items-center gap-[35px]'>
        <label
          className='text-[24px] font-semibold tracking-wide'
          htmlFor='selectDate'
        >
          Select Date
        </label>
        <Calendar
          className='rounded-lg p-3 w-[370px] text-[20px] text-center'
          id='picker'
          name='date'
          dateFormat='dd/mm/yy'
          onChange={ticketFormik.handleChange}
          value={ticketFormik.values.date}
          minDate={new Date()}
          placeholder='DD/MM/YYYY'
        />
      </div>
      {/* ------ select side -------- */}
      <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-[1.5rem]'>
        {/* -------- visitor type ------- */}
        <div className=' '>
          <h1 className='text-[24px] font-[500]'>Visitor Type :</h1>
          <VisitorType ticketFormik={ticketFormik} />
        </div>
        {/* -------- no. of tourists ------- */}
        <div>
          <h1 className='text-[24px] font-[500] mb-6'>No. Of Tourists :</h1>
          <NoOfSeats ticketFormik={ticketFormik} />
        </div>
        {/* -------- paid amount ------- */}
        <div>
          <h1 className='text-[24px] font-[500]'>Paid Amount</h1>
          <PaidAmount ticketFormik={ticketFormik} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
