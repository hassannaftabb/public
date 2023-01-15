import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
let token = localStorage.getItem('token');

export const getAllPlaces = async () => {
  try {
    const response = await axios.get(API_URL + `get-places?token=${token}`);
    return response;
  } catch (error) {
    console.log('An Error Occured while trying to get places:', error);
  }
};
