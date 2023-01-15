import React from 'react';
import BottomSection from '../Components/Booking Ticket/BottomSection';
import TopSection from '../Components/Booking Ticket/TopSection';
import Navbar from '../Components/Shared/NavBar';
import { bannerImg } from './home/Home';

const BookingTicket = ({ ticketFormik }) => {
  return (
    <div className='p-4 2xl:p-2'>
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className='h-80 overflow-hidden bg-cover max-w-7xl rounded-xl mx-auto bg-no-repeat  bg-center w-full bg-blend-darken '
      >
        <Navbar />
        <h2 className='h-full flex items-center justify-center pb-24 text-white text-3xl font-bold tracking-wide'>
          Hawa Mahal,{' '}
          <span className='font-semibold text-2xl'>Jaipur (Raj)</span>
        </h2>
      </div>

      <div className='pt-10 pb-16 px-10  bg-[#F0EBEB] max-w-7xl mx-auto rounded-xl -mt-10'>
        <TopSection ticketFormik={ticketFormik} />
        <BottomSection ticketFormik={ticketFormik} />
      </div>
    </div>
  );
};

export default BookingTicket;
