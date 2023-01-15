import React from 'react';
import BottomSection from '../Components/Confirmation/BottomSection';
import Table2 from '../Components/Confirmation/Table2';
import Navbar from '../Components/Shared/NavBar';
import { bannerImg } from './home/Home';

const ConfirmPage = ({ ticketFormik, postTicket }) => (
  <div className='p-4 2xl:p-2'>
    <div
      style={{ backgroundImage: `url(${bannerImg})` }}
      className='h-80 overflow-hidden bg-cover max-w-7xl rounded-xl mx-auto bg-no-repeat  bg-center w-full bg-blend-darken '
    >
      <Navbar />
      <h2 className='h-full flex items-center justify-center pb-24 text-white text-3xl font-bold tracking-wide'>
        Hawa Mahal, Jaipur (Raj)
      </h2>
    </div>
    <div className='bg-[#F0EBEB] max-w-7xl rounded-xl mx-auto pt-10 pb-16 px-10 -mt-10'>
      <Table2 ticketFormik={ticketFormik} />
      <BottomSection ticketFormik={ticketFormik} postTicket={postTicket} />
    </div>
  </div>
);

export default ConfirmPage;
