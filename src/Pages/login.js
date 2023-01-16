import { useFormik } from 'formik';
import React from 'react';
import SecondNav from '../Components/Shared/SecondNav';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { login } from '../services/login';
const Login = () => {
  const formik = useFormik({
    initialValues: {
      ssoId: '',
      password: '',
    },
    validationSchema: () => {
      return yup.object({
        ssoId: yup.string().required('SSO ID is required.'),
        password: yup.string().required('Password is required.'),
      });
    },
    onSubmit: async (values) => {
      const res = await login(values);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('ssoId', res.data.ssoId);
      toast.success('Successfully logged in!');
      setTimeout(() => {
        window.location = '/';
      }, 2500);
    },
  });

  return (
    <div className='m-3 flex flex-col space-y-3'>
      <SecondNav />
      <div className='max-h-screen bg-[#F0EBEB] rounded-[20px] shadow-lg'>
        <div className='w-2/5 mx-auto pt-10 pb-40 px-6 h-full'>
          <div className='w-full flex items-center justify-center flex-col'>
            <div className='mb-6'>
              <p className='text-[#2E2D2D] text-[15px] font-semibold mb-3 font-inter'>
                SSO Id:
              </p>
              <input
                name='ssoId'
                id='ssoId'
                value={formik.values.ssoId}
                onChange={formik.handleChange}
                placeholder='SSO Id'
                className='focus:outline-none rounded-[5px] px-2 overflow-hidden border border-gray-400/70 shadow-md w-[390px] h-[40px]'
                type='text'
              />
              {formik.touched.ssoId && Boolean(formik.errors.ssoId) && (
                <div>{formik.errors.ssoId}</div>
              )}
            </div>

            <div className='mb-6'>
              <p className='text-[#2E2D2D] text-[15px] font-semibold mb-3'>
                Password:
              </p>
              <input
                name='password'
                id='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder='Password'
                className='focus:outline-none rounded-[5px] px-2 overflow-hidden border border-gray-400/70 shadow-md w-[390px] h-[40px]'
                type='text'
              />
              {formik.touched.password && Boolean(formik.errors.password) && (
                <div>{formik.errors.password}</div>
              )}
            </div>

            <button
              className='w-[209px] bg-[#3C5071] text-white py-2.5 mb-0.5 rounded mx-auto mt-20'
              onClick={formik.handleSubmit}
              type='button'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
