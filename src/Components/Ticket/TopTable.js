import moment from 'moment';
import React from 'react';

const TopTable = ({ ticket }) => {
  console.log('tICKET', ticket);
  return (
    <div className='bg-[#D9D9D980] rounded-md mt-2 overflow-hidden border-l-2 border-r-2 border-t-2 border-gray-400'>
      <table className='w-full text-center'>
        <tr className='border-b-2 border-gray-400'>
          <th className='  text-left px-3 font-normal text-gray-600 border-r-2 border-gray-400'>
            Place:
          </th>
          <td className='border-r-2 border-gray-400 font-semibold'>
            Hawa Mahal
          </td>
          <th className='text-left px-3 font-normal text-gray-600  border-r-2 border-gray-400'>
            Booking ID:
          </th>
          <td className='p-2 font-semibold'>{ticket?.id}</td>
        </tr>
        <tr className='border-b-2 border-gray-400'>
          <th className='  text-left px-3 font-normal text-gray-600 border-r-2 border-gray-400'>
            Date Of Booking:
          </th>
          <td className=' border-r-2 border-gray-400 font-semibold'>
            {moment(ticket?.date).format('DD/MM/YYYY, hh:mm a')}
          </td>
          <th className='  text-left px-3 font-normal text-gray-600 border-r-2 border-gray-400'>
            Date of Visit:
          </th>
          <td className='p-2 font-semibold'>
            {moment(ticket?.date).format('DD/MM/YYYY')}
          </td>
        </tr>
        <tr className='border-b-2 border-gray-400'>
          <th className='  text-left px-3 font-normal text-gray-600 border-r-2 border-gray-400'>
            No. Of Visitors:
          </th>
          <td className='p-2 border-gray-400 font-semibold'>
            {ticket?.totalVisitors}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TopTable;
// <tr>
// 	<td>Date Of Booking:</td>
// 	<th className="py-[5px]">28/12/2022 03:19:26 PM</th>
// 	<td>Date of Visit:</td>
// 	<th className="py-[5px]">29/12/2022 </th>
// </tr>
// <tr>
// 	<td>No. Of Visitors:</td>
// 	<th className="py-[5px]">03</th>
// </tr>
