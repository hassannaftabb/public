import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomTable from './BottomTable';
import SecondTopTable from './SecondTopTable';
import TopTable from './TopTable';

const ConfirmationSlip = ({ ticket, print }) => {
  const navigate = useNavigate();
  return (
    <div className='mt-2'>
      <p className='py-[10px] bg-[#C2E1E5] text-center text-[14px] rounded-bl-[10px] rounded-br-[10px]'>
        Booking Confirmation Slip
      </p>
      {/* ------ top table ------ */}
      <div className='whitespace-nowrap'>
        <TopTable ticket={ticket} />
      </div>
      {/* -------- 2nd top table ----- */}
      <div>
        <SecondTopTable ticket={ticket} />
      </div>
      {/* ------- terms and condition -------- */}
      <div className='mt-2 w-full'>
        <div className='text-[15px] font-medium px-6 h-[25px] bg-[#E3C9C9] rounded-tl-[5px] rounded-tr-[5px] text-white align-bottom flex items-end font-inter'>
          Terms and conditions for Visitors :
        </div>
        <ul className='bg-[#D9D9D980] h-full text-[13px] font-normal font-inter p-2 text-[#000000] bg-img'>
          <li>
            1. The Visitor Or His/Her Representative Must Reach To The Forest
            Permit Booking Counter To Collect The Boarding Pass, At Least 45
            Minutes Prior To The Entry Time.
          </li>
          <br />
          <li>
            2. The Id Proof Of Visitor Produced At The Time Of Collecting
            Boarding Pass Should Be The Id Used While Booking Online Permit,
            Failing Which, The Permit Will Be Deemed Fake And Liable To Be
            Cancelled. The Visitor Must Also Carry Copy Of Such Id While
            Visiting The Park.
          </li>
          <br />
          <li>
            3. The Charges Deposited During Online Booking Include Tourist Entry
            Fee, Tiger Reserve Development Fund, Vehicle Entry Fee, Vehicle
            Rent, Guide Fees And Online Booking Charges And Applicable Taxes.
          </li>
          <br />
          <li>
            4. The Visitor Must Bring Two Copies of Confirmation Slip At The
            Time Of Collecting Boarding Pass. One Copy Will Be Deposited In The
            Office And The Other Copy Will Be Carried By The Visitor.
          </li>
          <br />
          <li>
            5. Seats Remaining Vacant Due To Non-Turn Up Of Any Visitors Would
            Be Filled By The Park Management At The Booking Window.
          </li>
          <br />
          <li>
            6. The Time To Receive The Boarding Pass Will Start Two Hours Before
            The Park Entry Time.
          </li>
          <br />
          <li>
            7. Allotment of Vehicle For Safari Will Be Done At Least One And
            Half Hour Prior To The Entry Time Of Visitors In The Park For
            Safari.
          </li>
          <br />
          <li>
            8. In Case of Group Booking, Park Authorities Will Try To Adjust The
            Group Together In Vehicles Subject To Space Availability At The Time
            Of Entry
          </li>
          <br />
          <li>
            9. Boarding Pass Will Be Issued At: Forest Permit Booking Office,
            Shilogram, Village Ramsinghpura, Ranthambhore Road, Sawai Madhopur
          </li>
          <br />
          <li>
            10. The Tiger Reserve Management Reserves The Right To Change The
            Zone Booked Online At Any Time Or Close Any Zone In The Interest Of
            Wildlife.
          </li>
          <br />
          <li>
            11. Choice Of Guide Is Available On Payment of Rs.500/- Extra Per
            Guide Per Safari.
          </li>
          <br />
          <li>
            12. Visitors Have Option To Choose A Vehicle (Gypsy/Canter) Of Their
            Choice On Payment Of Rs. 2000/- Per Gypsy And Rs. 3000/- Per Canter
            At The Time Of Getting Boarding Pass. If Visitor Cancel A Permit
            Thena.75% Refund Booking Amount If Cancellation Is Made Before 271/
            More Days From The Date Of Visit. B.50% Refund Of Booking Amount if
            Cancellation Is Made Before 181-270 Days From The Date Of Visit.
            C.25% Refund Of Booking Amount If Cancellation Is Made Before 90-180
            Days From The Date Of Visit. D.0% Refund Of Booking Amount if
            Cancellation Is Made With In 90 Days From The Date of Visit
          </li>
          <br />
          <li>
            13. In Case of Any Changes In Applicable Fees & Tax Rates, The
            Difference Amount Shall Be Collected At The Time Of Boarding/ Entry
            Of The Park
          </li>
        </ul>
      </div>
      {/* ----- bottom table ------ */}
      <BottomTable />
      {/* ------- bottom buttons ------- */}
      <div className='flex justify-center gap-[80px] mt-4'>
        <button
          className='py-2 rounded-md px-5 bg-[#3C5071] text-white font-[600]'
          onClick={print}
        >
          Download Ticket
        </button>
        <button
          className='py-2 rounded-md px-5 bg-[#3C5071] text-white font-[600]'
          onClick={() => navigate('/')}
        >
          Book Ticket Again
        </button>
      </div>
    </div>
  );
};

export default ConfirmationSlip;
