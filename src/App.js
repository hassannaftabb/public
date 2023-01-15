import { Formik, useFormik } from 'formik';
import { toast, Toaster } from 'react-hot-toast';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ACCategory from './Pages/ACCategory';
import BookingInfo from './Pages/BookingInfo';
import BookingTicket from './Pages/BookingTicket';
import ConfirmPage from './Pages/ConfirmPage';
import Home2 from './Pages/home/Home2';
import Login from './Pages/login';
import PreviewDetails from './Pages/PreviewDetails';
import Success from './Pages/Success';
import Ticket from './Pages/Ticket';
import ViewMapped from './Pages/ViewMapped';
import { addTicket } from './services/addTicket';

function App() {
  const navigate = useNavigate();
  const ticketFormik = useFormik({
    initialValues: {
      date: '',
      indianCitizen: false,
      foreignCitizen: false,
      indianStudent: false,
      foreignStudent: false,
      indianCitizenNo: 0,
      foreignCitizenNo: 0,
      indianStudentNo: 0,
      foreignStudentNo: 0,
      indianCitizenPaidAmount: 0,
      foreignCitizenPaidAmount: 0,
      indianStudentPaidAmount: 0,
      foreignStudentPaidAmount: 0,
      mobileNo: '',
      emailId: '',
      agreeToTerms: false,
    },
    onSubmit: async (values) => {
      let totalAmount =
        values.indianCitizenNo * 50 +
        values.foreignCitizenNo * 200 +
        values.indianStudentNo * 20 +
        values.foreignStudentNo * 100;
      if (values.date === '') {
        toast.error('Please select a date!');
      } else if (
        (values.indianCitizen && values.indianCitizenNo <= 0) ||
        (values.foreignCitizen && values.foreignCitizenNo <= 0) ||
        (values.foreignStudent && values.foreignStudentNo <= 0) ||
        (values.indianStudent && values.indianStudentNo <= 0)
      ) {
        toast.error('Please enter the correct value!');
      } else if (
        !(
          values.indianCitizen ||
          values.foreignCitizen ||
          values.foreignStudent ||
          values.indianStudent
        )
      ) {
        toast.error('Please select at least one visitor type!');
      } else if (totalAmount === 0) {
        toast.error('Amount cannot be zero!');
      } else {
        navigate('/confirmation');
      }
    },
  });

  const postTicket = async () => {
    if (!ticketFormik.values.agreeToTerms) {
      toast.error('Please accept our terms!');
    } else {
      const ticketAmount =
        ticketFormik.values.indianCitizenNo * 50 +
        ticketFormik.values.foreignCitizenNo * 200 +
        ticketFormik.values.indianStudentNo * 20 +
        ticketFormik.values.foreignStudentNo * 100;
      let gst = ticketAmount - (ticketAmount * 18) / 100;
      let totalVisitors =
        (ticketFormik.values.indianCitizen &&
          ticketFormik.values.indianCitizenNo) +
        (ticketFormik.values.foreignCitizen &&
          ticketFormik.values.foreignCitizenNo) +
        (ticketFormik.values.indianStudent &&
          ticketFormik.values.indianStudentNo) +
        (ticketFormik.values.foreignStudent &&
          ticketFormik.values.foreignStudentNo);
      let data = {
        date: ticketFormik.values.date,
        ...(ticketFormik.values.indianCitizen && {
          indianCitizenNo: ticketFormik.values.indianCitizenNo,
        }),
        ...(ticketFormik.values.foreignCitizen && {
          foreignCitizenNo: ticketFormik.values.foreignCitizenNo,
        }),
        ...(ticketFormik.values.indianStudent && {
          indianStudentNo: ticketFormik.values.indianStudentNo,
        }),
        ...(ticketFormik.values.foreignStudent && {
          foreignStudentNo: ticketFormik.values.foreignStudentNo,
        }),
        ...(ticketFormik.values.mobileNo !== '' && {
          mobileNo: ticketFormik.values.mobileNo,
        }),
        totalAmount: ticketAmount + gst + 10,
        ticketAmount: ticketAmount,
        totalVisitors: totalVisitors,
        status: 'Active',
        gst: gst,
        ...(ticketFormik.values.emailId && {
          emailId: ticketFormik.values.emailId,
        }),
      };
      const response = await addTicket(data);
      if (response.status === 201) {
        toast.success('Ticket Added Successfully!');
        navigate(`/success/${response.data.data.id}`);
      } else {
        toast.success('Could not add ticket!');
      }
    }
  };

  return (
    <div className='bg-white'>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home2 />} />{' '}
        <Route path='/login' element={<Login />} />{' '}
        <Route
          path='/booking-ticket'
          element={<BookingTicket ticketFormik={ticketFormik} />}
        />
        <Route
          path='/confirmation'
          element={
            <ConfirmPage ticketFormik={ticketFormik} postTicket={postTicket} />
          }
        />{' '}
        <Route path='/success/:id' element={<Success />} />{' '}
        <Route path='/ticket/:id' element={<Ticket />} />{' '}
        <Route path='/view' element={<ViewMapped />} />{' '}
        <Route path='/booking-info/:id' element={<BookingInfo />} />{' '}
        <Route path='/account-category/:id' element={<ACCategory />} />{' '}
        <Route path='/preview-details/:id' element={<PreviewDetails />} />{' '}
      </Routes>{' '}
    </div>
  );
}

export default App;
