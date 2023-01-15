import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (data) => {
  try {
    const response = await axios.post(API_URL + 'login', data);
    return response;
  } catch (error) {
    console.log('An Error Occured while trying to login:', error);
  }
};
