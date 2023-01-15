import React from 'react';
import SelectedInfo from '../Components/Preview Details/SelectedInfo';
import SecondNav from '../Components/Shared/SecondNav';

const PreviewDetails = () => {
  return (
    <div className='min-h-screen bg-[#F0EBEB] w-[100%]'>
      <SecondNav />
      <div className='container mx-auto pt-10 px-6 pb-16'>
        <SelectedInfo />
      </div>
    </div>
  );
};

export default PreviewDetails;
