import React, { useState } from 'react';
import SecondNav from '../Components/Shared/SecondNav';
import { ButtonMd } from '../Components/Shared/Constant';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const options = ['Current Account', 'Savings Account', 'Budget Account'];
const baseURL = 'http://localhost:5500/account_details';

const ACCategory = () => {
  // ------ dropdown state ------ //
  const [accountType, setaccountType] = useState('Budget Account');
  const [accountName, setaccountName] = useState();
  const [bankName, setbankName] = useState();
  const [accountNo, setaccountNo] = useState();
  const [ifscCode, setifscCode] = useState();
  const [branch, setbranch] = useState();
  const [indCitizen, setindCitizen] = useState();
  const [indStudent, setindStudent] = useState();
  const [foreignCitizen, setforeignCitizen] = useState();
  const [foreignStudent, setforeignStudent] = useState();
  const [grandTotal, setGrandTotal] = useState([]);
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([
    {
      accountType: '',
      accountName: '',
      bankName: '',
      accountNo: '',
      ifscCode: '',
      branch: '',
      indCitizen: '',
      indStudent: '',
      foreignCitizen: '',
      foreignStudent: '',
    },
  ]);
  const [dateInputsnum, setDateInputNums] = useState([1]);

  const handleSubmit = (e) => {
    const data = {
      accountType: accountType,
      accountName: accountName,
      bankName: bankName,
      accountNo: accountNo,
      ifscCode: ifscCode,
      branch: branch,
      indCitizen: indCitizen,
      indStudent: indStudent,
      foreignCitizen: foreignCitizen,
      foreignStudent: foreignStudent,
    };
    e.preventDefault();
    console.log(data);
    axios
      .post(baseURL, data, {
        'Content-Type': 'multipart/form-data',
      })
      .then((response) => {
        console.log(response.data);
        const lastinsertid = response.lastinsertid;
        console.log(lastinsertid);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (index, key, value) => {
    let accs = [...accounts];
    accs[index][key] = value;
    setAccounts(accs);
  };

  React.useEffect(() => {
    let gd1 = 0;
    let gd2 = 0;
    let gd3 = 0;
    let gd4 = 0;
    accounts.forEach((account) => {
      gd1 += parseInt(account.indCitizen);
      gd2 += parseInt(account.foreignCitizen);
      gd3 += parseInt(account.indStudent);
      gd4 += parseInt(account.foreignStudent);
    });
    setGrandTotal([gd1, gd2, gd3, gd4]);
  }, [accounts]);

  return (
    <div className='min-h-screen bg-[#F0EBEB] w-[100%]'>
      <SecondNav />
      <div className='container mx-auto px-6 pt-10 pb-16'>
        <div className='w-full'>
          <h1 className='text-[24px] text-[#626262] font-semibold'>
            A/C Details
          </h1>
          <div className='mt-[32px] w-full overflow-auto'>
            <div className='w-full overflow-auto my-2'>
              {/* -------- 1st table -------- */}
              <div>
                {/* ------ heading row ------ */}
                <div className='grid grid-cols-10 w-full text-center overflow-auto'>
                  {/* ------ data -------- */}
                  <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                    <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px] rounded-tl-[5px] rounded-bl-[5px]'>
                      Type Of A/C
                    </h1>
                  </div>
                  {/* ------ data -------- */}
                  <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                    <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                      Name Of A/C
                    </h1>
                  </div>
                  {/* ------ data -------- */}
                  <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                    <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                      Bank Name:
                    </h1>
                  </div>
                  {/* ------ data -------- */}
                  <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                    <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                      A/C Number:
                    </h1>
                  </div>
                  {/* ------ data -------- */}
                  <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                    <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                      IFSC code:
                    </h1>
                  </div>
                  {/* ------ data -------- */}
                  <div className='w-full h-[44px] border-r-[1px] border-gray-400'>
                    <h1 className='bg-[#3C5071] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px]'>
                      Branch:
                    </h1>
                  </div>
                  {/* ------ data -------- */}
                  <div className='w-full h-[44px] col-span-3  border-gray-400'>
                    <h1 className='bg-[#3C5071] text-center h-[50%] flex justify-center items-center text-white font-[500] truncate px-[3px] text-[15px] rounded-tr-[5px]'>
                      Price Category:
                    </h1>
                    <div className='grid grid-cols-4 h-[50%] border-t-[1px] text-white'>
                      <h6 className='pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400'>
                        Indian Citizen
                      </h6>
                      <h6 className='pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400'>
                        Foreigner Citizen
                      </h6>
                      <h6 className='pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate border-r-[1px] border-gray-400'>
                        Indian student
                      </h6>
                      <h6 className='pt-[1px] h-[100%] bg-[#3C5071] text-[10px] px-[2px] truncate rounded-br-[5px]'>
                        Foreigner student
                      </h6>
                    </div>
                  </div>
                  {/* <div className='w-full h-[44px] '>
                        <h1 className=' h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]'></h1>
                      </div> */}
                </div>

                {/* -------- data row ------ */}
                {/* -------- data row ------ */}
                {dateInputsnum?.map((val, index) => {
                  return (
                    <div className='grid grid-cols-10 w-full overflow-auto'>
                      {/* ------ data -------- */}
                      <div className=' h-[44px] border-r-[1px] border-gray-400'>
                        <div className='bg-[white] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]'>
                          <FormControl className='focus:border-none bg-white  !text-gray-300 w-full h-10'>
                            <Select
                              value={accounts[index].accountType}
                              onChange={(e) =>
                                handleChange(
                                  index,
                                  'accountType',
                                  e.target.value
                                )
                              }
                              displayEmpty
                              inputProps={{ 'aria-label': 'Without label' }}
                              className='w-full h-10 !text-gray-400 '
                              defaultValue='1'
                            >
                              {options?.map((el) => (
                                <MenuItem value={el}>{el}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      {/* ------ data -------- */}
                      <div className=' h-[44px] border-r-[1px] border-gray-400'>
                        <input
                          value={accounts[index].accountName}
                          onChange={(e) =>
                            handleChange(index, 'accountName', e.target.value)
                          }
                          className='w-[100%] h-[100%] focus:outline-none text-black p-2'
                          type='text'
                          placeholder='Type here'
                        />
                      </div>
                      {/* ------ data -------- */}
                      <div className=' h-[44px] border-r-[1px] border-gray-400'>
                        <div className='bg-[white] text-center h-[100%] flex justify-center items-center text-white font-[500] truncate px-[3px]'>
                          <FormControl className='focus:border-none bg-white  !text-gray-300 w-full h-10'>
                            <Select
                              value={accounts[index].bankName}
                              onChange={(e) =>
                                handleChange(index, 'bankName', e.target.value)
                              }
                              displayEmpty
                              inputProps={{ 'aria-label': 'Without label' }}
                              className='w-full h-10 !text-gray-400 '
                              defaultValue='1'
                            >
                              {options?.map((el) => (
                                <MenuItem value={el}>Select Here</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      {/* ------ data -------- */}
                      <div className=' h-[44px] border-r-[1px] border-gray-400'>
                        <input
                          onChange={(e) => {
                            handleChange(index, 'accountNo', e.target.value);
                          }}
                          value={accounts[index].accountNo}
                          className='w-[100%] h-[100%] focus:outline-none text-black p-2'
                          type='text'
                          placeholder='Type here'
                          min={0}
                        />
                      </div>
                      {/* ------ data -------- */}
                      <div className=' h-[44px] border-r-[1px] border-gray-400'>
                        <input
                          onChange={(e) =>
                            handleChange(index, 'ifscCode', e.target.value)
                          }
                          value={accounts[index].ifscCode}
                          className='w-[100%] h-[100%] focus:outline-none text-black p-2'
                          type='text'
                          placeholder='Type here'
                          disabled={
                            accounts[index].accountType === 'Budget Account'
                          }
                        />
                      </div>
                      {/* ------ data -------- */}
                      <div className=' h-[44px] border-r-[1px] border-gray-400'>
                        <input
                          onChange={(e) =>
                            handleChange(index, 'branch', e.target.value)
                          }
                          className='w-[100%] h-[100%] focus:outline-none text-black p-2'
                          type='text'
                          value={accounts[index].branch}
                          placeholder='Type here'
                          disabled={
                            accounts[index].accountType === 'Budget Account'
                          }
                        />
                      </div>
                      {/* ------ data -------- */}
                      <div className='col-span-3 h-[44px] '>
                        <div className='grid grid-cols-4 h-[100%] border-t-[1px] bg-white text-xs '>
                          <input
                            onChange={(e) => {
                              if (!(e.target.value < 0)) {
                                handleChange(
                                  index,
                                  'indCitizen',
                                  e.target.value
                                );
                              }
                            }}
                            value={accounts[index].indCitizen}
                            className='h-full p-2 truncate border-r-[1px] border-gray-400'
                            type='number'
                            placeholder='Indian Citizen'
                            min={0}
                          />
                          <input
                            onChange={(e) => {
                              if (!(e.target.value < 0)) {
                                handleChange(
                                  index,
                                  'foreignCitizen',
                                  e.target.value
                                );
                              }
                            }}
                            value={accounts[index].foreignCitizen}
                            className='h-full p-2 truncate border-r-[1px] border-gray-400'
                            type='number'
                            placeholder='Foreigner Citizen'
                            min={0}
                          />
                          <input
                            onChange={(e) => {
                              if (!(e.target.value < 0)) {
                                handleChange(
                                  index,
                                  'indStudent',
                                  e.target.value
                                );
                              }
                            }}
                            value={accounts[index].indStudent}
                            className='h-full p-2 truncate border-r-[1px] border-gray-400'
                            type='number'
                            placeholder='Indian student'
                            min={0}
                          />
                          <input
                            onChange={(e) => {
                              if (!(e.target.value < 0)) {
                                handleChange(
                                  index,
                                  'foreignStudent',
                                  e.target.value
                                );
                              }
                            }}
                            value={accounts[index].foreignStudent}
                            className='h-full p-2 truncate '
                            type='number'
                            placeholder='Foreigner student'
                            min={0}
                          />
                        </div>
                      </div>
                      {/* button div  */}
                      <div className='flex justify-end items-center gap-[10px] ml-24 my-0.5'>
                        <button
                          className=''
                          onClick={() => {
                            let arr = [...dateInputsnum];
                            arr.push(Math.random());
                            let accData = [...accounts];
                            console.log(accData, 'accData');
                            accData.push({
                              accountType: '',
                              accountName: '',
                              bankName: '',
                              accountNo: '',
                              ifscCode: '',
                              branch: '',
                              indCitizen: '',
                              indStudent: '',
                              foreignCitizen: '',
                              foreignStudent: '',
                            });
                            setAccounts(accData);
                            setDateInputNums(arr);
                            setGrandTotal([...grandTotal]);
                          }}
                        >
                          <span className='bg-[#3C5071] px-[5px] rounded-[6px] text-white font-[600] hidden xl:inline-flex text-sm items-center justify-center h-[43.99px]'>
                            Add
                          </span>
                          <span className='xl:hidden bg-[#3C5071] h-7 w-7 text-sm rounded inline-flex items-center justify-center text-white'>
                            +
                          </span>
                        </button>
                        <button
                          className=''
                          onClick={() => {
                            let arr = [...dateInputsnum];
                            arr.pop(1);
                            setDateInputNums(arr);
                            let accs = [...accounts];
                            console.log(accs[index], 'id');
                            accs.splice(index, 1);
                            console.log(accs, 'accounts');
                            setAccounts(accs);
                          }}
                          disabled={dateInputsnum.length === 1}
                        >
                          <span className='bg-[#3C5071] px-[5px] rounded-[6px] text-white font-[600] hidden xl:inline-flex items-center justify-center text-sm h-[43.99px]'>
                            Remove
                          </span>
                          <span className='xl:hidden bg-[#3C5071] h-7 w-7 text-sm rounded inline-flex items-center justify-center text-white'>
                            -
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ------- grand total -------- */}
            <div className=' flex flex-col lg:flex-row justify-end items-center gap-[10px] mt-[24px] mr-[7rem]'>
              <h3 className='text-[20px] font-[600] text-[#626262]'>
                Grand Total:
              </h3>
              <div className='grid grid-cols-4 w-[90vw] lg:w-[450px] bg-white rounded-[6px] shadow-lg border border-[#00000040] h-[40px] text-center items-center'>
                <div className='border-r-[1px] border-[#00000040]'>
                  {grandTotal[0] ? grandTotal[0] : ''}
                </div>
                <div className='border-r-[1px] border-[#00000040]'>
                  {grandTotal[1] ? grandTotal[1] : ''}
                </div>
                <div className='border-r-[1px] border-[#00000040]'>
                  {grandTotal[2] ? grandTotal[2] : ''}
                </div>
                {grandTotal[3] ? grandTotal[3] : ''}
              </div>
            </div>
            {/* -------- bottom buttons -------- */}
            <div className='flex justify-end gap-[10px] mt-[208px] mr-[9.5rem]'>
              <ButtonMd text='Back' />
              <ButtonMd text='Cancel' onClick={() => navigate(`/`)} />
              <span onClick={() => navigate(`/preview-details/2`)}>
                <ButtonMd text='Submit' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACCategory;
