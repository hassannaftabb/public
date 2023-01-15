import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const updatePlaceStatusApi = async (data) => {
  try {
    const response = await axios.patch(API_URL + 'update-place-status', data);
    return response;
  } catch (error) {
    console.log('An Error Occured while trying to post a ticket:', error);
  }
};
