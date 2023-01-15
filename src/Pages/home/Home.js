import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBarChart } from 'react-icons/bi';
import { FaUserPlus } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Shared/NavBar';
import AreaChart from './AreaChart';
import Cards from './Cards';
import CircleChart from './CircleChart';
export const bannerImg = '/top-banner.png';
const Home = () => {
  const cards = [
    {
      id: 1,
      num: 150,
      title: 'Total Visitors',
      icon: HiOutlineShoppingBag,
      path: '',
      bgColor: 'bg-blue-600',
      footerColor: 'bg-blue-500',
    },
    {
      id: 2,
      num: 144,
      title: 'Total Bookings',
      icon: BiBarChart,
      path: '',
      bgColor: 'bg-green-600',
      footerColor: 'bg-green-500',
    },
    {
      id: 3,
      num: '430k',
      title: 'Total Revenue',
      icon: FaUserPlus,
      path: '',
      bgColor: 'bg-yellow-600',
      footerColor: 'bg-yellow-500',
    },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className='h-96 mb-10 overflow-hidden bg-cover bg-no-repeat p-2 bg-center w-full '
      >
        <Navbar />
        <div className='h-full flex items-center justify-center pb-16 '>
          <div className='w-80 relative'>
            <input
              type='text'
              className='px-3 pr-8 outline-none rounded-md h-10 border border-gray-200 w-full'
              placeholder='Search here...'
            />
            <AiOutlineSearch className='absolute right-2 text-xl text-gray-500  top-2.5' />
          </div>
        </div>
      </div>
      <div className='flex items-start max-w-6xl mx-auto px-4 justify-center gap-8  pb-16'>
        <div className='max-w-4xl w-full mx-auto '>
          <div className='flex items-center justify-center gap-8 mb-8'>
            <Cards data={cards[0]} />
            <Cards data={cards[1]} />
            <Cards data={cards[2]} />
          </div>
          <div className='border rounded-lg  pt-5 pr-4'>
            <AreaChart />
          </div>
        </div>
        <div className='flex-shrink-0 text-center'>
          <CircleChart />
          <Link
            to='/booking-ticket-2'
            className='bg-[#314668] block text-[#FFC107] mt-10 w-4/6 mx-auto py-3 rounded-lg'
          >
            Book Ticket
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
