import React from 'react';
import { FiUpload } from 'react-icons/fi';
const SecondGroup = () => {
  //{ place }
  return (
    <div className='flex flex-row flex-wrap items-center gap-[10px]'>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          City:
        </p>
        {/* {Object.keys(place).length > 0 && ( */}
        <input
          placeholder='Jaipur'
          // value={place?.city}
          disabled
          className='focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
          type='text'
        />
        {/* )} */}
      </div>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          place:
        </p>
        <input
          placeholder='Hawa Mahal'
          // value={place?.placeName}
          disabled
          className='focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
          type='text'
        />
      </div>
      {/* {place?.place_coordinate_latitude &&
        place?.place_coordinate_longitude && ( */}
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          GIS location:
        </p>
        <input
          placeholder='26.9239° N, 75.8267° E'
          className='focus:outline-none p-3 h-12 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
          type='text'
          // value={`${place?.place_coordinate_latitude},${place?.place_coordinate_longitude} `}
          disabled
        />
      </div>
      {/* )} */}
      {/* -------- site image: ------- */}
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          SSO Id:
        </p>
        <input
          placeholder='hawa.mahal22@gmail.com'
          className='focus:outline-none h-12 p-3 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
          type='text'
          disabled
        />
      </div>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          site image:
        </p>
        <div className='flex items-center gap-[24px] focus:outline-none   w-96'>
          <label className='w-full cursor-pointer' htmlFor='siteImage'>
            <p className='text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md '>
              <FiUpload />
              File Uploaded
            </p>
            <input
              className='hidden'
              type='file'
              name='siteImage'
              id='siteImage'
              disabled
            />
          </label>
        </div>
      </div>
      {/* -------- image for ticket: ------- */}
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          image for ticket:
        </p>
        <div className='flex items-center gap-[24px] focus:outline-none   w-96'>
          <label className='w-full cursor-pointer' htmlFor='siteImage'>
            <p className='text-[14px] text-[#00000080] font-[500] bg-white flex items-center justify-center gap-[6px] h-12 rounded overflow-hidden border border-gray-400/70 shadow-md '>
              <FiUpload />
              File Uploaded
            </p>
            <input
              className='hidden'
              type='file'
              name='siteImage'
              id='siteImage'
              disabled
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SecondGroup;
