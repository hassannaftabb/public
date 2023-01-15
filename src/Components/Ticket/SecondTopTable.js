import moment from 'moment';
import React from 'react';

const SecondTopTable = ({ ticket }) => {
  return (
    <div className='mt-2 rounded-md overflow-hidden border-l-2 border-r-2 border-t-2 border-gray-400'>
      <table className=' bg-[#D9D9D980]  w-full'>
        <tr className='bg-[#79A0C580] capitalize text-white border-b-2 border-gray-400 '>
          <td className='text-[12px] text-center border-r-2 border-gray-400 py-2 px-2 font-semibold '>
            Visit Date
          </td>
          <td className='text-[12px] text-center border-r-2 border-gray-400  py-2  px-2  font-semibold'>
            Visitor Type
          </td>
          <td className='text-[12px] text-center border-r-2 border-gray-400 py-2 font-semibold'>
            no. of touristes
          </td>
          <td className='text-[12px] text-center border-r-2 border-gray-400 py-2 font-semibold'>
            contact info
          </td>
          <td className='text-[12px] text-center border-r-2 border-gray-400 py-2 font-semibold'>
            ticket amt
          </td>
          <td className='text-[12px] text-center border-r-2 border-gray-400 py-2 font-semibold'>
            GST 18%
          </td>
          <td className='text-[12px] text-centerborder-r-2 border-gray-400 py-2 font-semibold'>
            total amt.
          </td>
        </tr>
        <tr className='bg-[#D9D9D980] border-b-2 border-gray-400 text-black font-inter font-semibold'>
          <td className='text-sm text-center p-3 border-r-2 border-gray-400'>
            {moment(ticket?.date).format('DD/MM/YYYY')}
          </td>
          <td className='text-sm text-center p-3 border-r-2 border-gray-400'>
            {ticket.indianCitizenNo && `Indian Citizen, `}
            {ticket.foreignCitizenNo && `Foreign Citizen, `}
            {ticket.indianStudentNo && `Indian Student, `}
            {ticket.foreignStudentNo && `Foreign Student, `}
          </td>
          <td className='text-sm text-center p-3 border-r-2 border-gray-400'>
            {ticket?.totalVisitors}
          </td>
          <td className='text-sm text-center p-3 border-r-2 border-gray-400'>
            {ticket.mobileNo ? <>{ticket.mobileNo}</> : <>{ticket.emailId}</>}
          </td>
          <td className='text-sm text-center p-3 border-r-2 border-gray-400'>
            {ticket?.ticketAmount}
          </td>
          <td className='text-sm text-center p-3 border-r-2 border-gray-400'>
            {ticket?.gst}
          </td>
          <td className='text-sm text-center p-3 '>{ticket?.totalAmount}</td>
        </tr>
      </table>
    </div>
  );
};

export default SecondTopTable;
