import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ConfirmationSlip from '../Components/Ticket/ConfirmationSlip';
import TopPart from '../Components/Ticket/TopPart';
import { getTicketById } from '../services/getTicket';

const Ticket = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState({});
  React.useEffect(() => {
    const getTicket = async () => {
      const response = await getTicketById(id);
      setTicket(response.data.data);
    };
    getTicket();
  }, [id]);

  const print = () => {
    window.print();
  };
  return (
    <div className=' min-h-screen bg-[#F5F5F5] flex justify-center items-center'>
      {/* ------- A4 size -------- */}
      <div className='bg-white p-2 w-full max-w-3xl' id='ticket'>
        {/* Top part  */}
        <TopPart ticket={ticket} print={print} />
        {/* Confirmation Slip  */}
        <ConfirmationSlip ticket={ticket} print={print} />
      </div>
    </div>
  );
};

export default Ticket;
