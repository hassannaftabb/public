import { Checkbox } from '@mui/material';
import React from 'react';

const VisitorType = ({ ticketFormik }) => {
  return (
    <div className='flex flex-col gap-3 mt-9'>
      {/* -------- Indian Citizen? ------- */}
      <div className='flex items-center'>
        <Checkbox
          color='default'
          name='indianCitizen'
          id='checkbox'
          className='bg-white'
          checked={ticketFormik.values.indianCitizen}
          onChange={() => {
            ticketFormik.setFieldValue(
              'indianCitizen',
              !ticketFormik.values.indianCitizen
            );
            ticketFormik.setFieldValue('indianCitizenNo', 1);
            ticketFormik.setFieldValue('indianCitizenPaidAmount', 0);
          }}
        />
        <label
          className='text-lg text-[#504E4E] font-normal'
          htmlFor='indianCitizen'
        >
          Indian Citizen
        </label>
      </div>
      {/* -------- Foreigner Citizen ------- */}
      <div className='flex items-center'>
        <Checkbox
          color='default'
          name='foreignCitizen'
          id='foreignCitizen'
          checked={ticketFormik.values.foreignCitizen}
          onChange={() => {
            ticketFormik.setFieldValue(
              'foreignCitizen',
              !ticketFormik.values.foreignCitizen
            );
            ticketFormik.setFieldValue('foreignCitizenNo', 1);
            ticketFormik.setFieldValue('foreignCitizenPaidAmount', 0);
          }}
        />
        <label
          className='text-lg text-[#504E4E] font-normal'
          htmlFor='foreignerCitizen'
        >
          Foreigner Citizen
        </label>
      </div>
      {/* -------- Indian Student ------- */}
      <div className='flex items-center'>
        <Checkbox
          color='default'
          name='indianStudent'
          id='indianStudent'
          checked={ticketFormik.values.indianStudent}
          onChange={() => {
            ticketFormik.setFieldValue(
              'indianStudent',
              !ticketFormik.values.indianStudent
            );
            ticketFormik.setFieldValue('indianStudentNo', 1);
            ticketFormik.setFieldValue('indianStudentPaidAmount', 0);
          }}
        />
        <label
          className='text-lg text-[#504E4E] font-normal'
          htmlFor='indianStudent'
        >
          Indian Student
        </label>
      </div>
      {/* -------- Foreigner Student ------- */}
      <div className='flex items-center'>
        <Checkbox
          color='default'
          name='foreignStudent'
          id='foreignStudent'
          checked={ticketFormik.values.foreignStudent}
          onChange={() => {
            ticketFormik.setFieldValue(
              'foreignStudent',
              !ticketFormik.values.foreignStudent
            );
            ticketFormik.setFieldValue('foreignStudentNo', 1);
            ticketFormik.setFieldValue('foreignStudentPaidAmount', 0);
          }}
        />
        <label
          className='text-lg text-[#504E4E] font-normal'
          htmlFor='foreignerStudent'
        >
          Foreigner Student
        </label>
      </div>
    </div>
  );
};

export default VisitorType;
