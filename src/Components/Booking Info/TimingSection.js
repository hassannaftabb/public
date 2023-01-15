import React from 'react';
import { useNavigate } from 'react-router-dom';

// shadow-[0_4px_4px_rgba(0,0,0,0.3)]
const TimingSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className='text-[24px] text-[#626262] font-[600]'>Timing:</h1>
      {/* ------ PARENT DIV ------- */}
      <div className='flex items-end flex-wrap gap-8'>
        {/* -------- left side inputs ------- */}
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          {/* ----- Winter Session ------- */}
          <div className=' '>
            <h3 className='text-[20px] font-[600]'>Winter Session</h3>
            <div className='flex items-center w-96 gap-0.5 '>
              {/* ------- start time ------ */}
              <div className='w-full'>
                <p className='text-[14px]'>Start Time</p>

                <input
                  className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                  type='time'
                />
              </div>
              {/* ------- end time ------ */}
              <div className='w-full'>
                <p className='text-[14px]'>End Time</p>
                <input
                  className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                  type='time'
                />
              </div>
            </div>
          </div>

          {/* ----- Summer Session ------- */}
          <div className=' '>
            <h3 className='text-[20px] font-[600]'>Summer Session</h3>
            <div className='flex items-center w-96 gap-0.5 '>
              {/* ------- start time ------ */}
              <div className='w-full'>
                <p className='text-[14px]'>Start Time</p>
                <input
                  className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                  type='time'
                />
              </div>
              {/* ------- end time ------ */}
              <div className='w-full'>
                <p className='text-[14px]'>End Time</p>
                <input
                  className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
                  type='time'
                />
              </div>
            </div>
          </div>
          {/* ----- Holiday Session ------- */}
          <div className=''>
            <h3 className='text-[20px] font-[600]'>Holiday Session</h3>
            {/* ------- start time ------ */}
            <p className='text-[14px]'>Date Period</p>
            <input
              className='w-full h-12 p-2 rounded border border-gray-400/70 shadow-md'
              type='date'
            />
          </div>
        </div>
        {/* -------- button side --------- */}
        <div className='flex gap-4 xl:-ml-4  mb-0.5'>
          <button className='bg-[#3C5071] px-5 text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'>
            Add
          </button>
          <button className='bg-[#3C5071] px-5 text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'>
            Back
          </button>
          <button className='bg-[#3C5071] px-5 text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'>
            Cancel
          </button>
          <button
            onClick={() => navigate('/account-category')}
            className='bg-[#3C5071] px-[10px] h-11 text-white rounded-[6px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] uppercase font-[600]'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimingSection;
