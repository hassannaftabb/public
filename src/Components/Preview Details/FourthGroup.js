import React from 'react';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SecondGroup = () => {
  // ------ dropdown state -----
  const [account, setAccount] = React.useState(1);

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  return (
    <div className='flex flex-row flex-wrap items-center gap-[10px]'>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          Name:
        </p>
        <input
          placeholder='Pawan Kumar'
          className='focus:outline-none h-12 p-3 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
          type='text'
          disabled
        />
      </div>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          Contact No:
        </p>
        <input
          placeholder='+91 98XXXXXXXX'
          className='focus:outline-none h-12 p-3 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
          type='text'
          disabled
        />
      </div>
      <div>
        <p className='text-[#00000099] text-2xl font-semibold mb-3 capitalize'>
          Email ID
        </p>
        <input
          placeholder='hawa.mahal22@gmail.com'
          className='focus:outline-none h-12 p-3 rounded overflow-hidden border border-gray-400/70 shadow-md w-96'
          type='text'
          disabled
        />
      </div>
    </div>
  );
};

export default SecondGroup;
