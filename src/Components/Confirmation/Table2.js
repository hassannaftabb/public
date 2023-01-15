import moment from 'moment/moment';
import React from 'react';

const Table2 = ({ ticketFormik }) => {
  let totalVisitors =
    (ticketFormik.values.indianCitizen && ticketFormik.values.indianCitizenNo) +
    (ticketFormik.values.foreignCitizen &&
      ticketFormik.values.foreignCitizenNo) +
    (ticketFormik.values.indianStudent && ticketFormik.values.indianStudentNo) +
    (ticketFormik.values.foreignStudent &&
      ticketFormik.values.foreignStudentNo);
  return (
    <table className='w-full'>
      <thead className='w-full'>
        <tr className='w-full text-lg text-[#2E2D2D]'>
          <th className=''>Sr. No</th>
          <th className='p-3'>Visit Date</th>
          <th className='p-3'>Visiter Type</th>
          <th className='p-3'>No. of Tourists</th>
          <th className='p-3'>Contact Information</th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y-2 di'>
        <tr className=' text-gray-400 text-center'>
          <td className='w-13 border-r-2 w-[68px]'>01</td>
          <td className='w-13 border-r-2 p-3'>
            {moment(ticketFormik.values.date).format('DD/MM/YYYY')}
          </td>
          <td className='w-13 border-r-2 p-3'>
            {ticketFormik.values.indianCitizen && `Indian Citizen, `}
            {ticketFormik.values.foreignCitizen && `Foreign Citizen, `}
            {ticketFormik.values.indianStudent && `Indian Student, `}
            {ticketFormik.values.foreignStudent && `Foreign Student, `}
          </td>
          <td className='w-13 border-r-2 p-3'> {totalVisitors}</td>
          <td className='w-13 p-3'>
            {ticketFormik.values.mobileNo !== '' ? (
              <>{ticketFormik.values.mobileNo}</>
            ) : (
              <>{ticketFormik.values.emailId}</>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table2;
