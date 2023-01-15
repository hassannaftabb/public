import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getTicketById = async (id) => {
  try {
    const response = await axios.post(API_URL + 'get-ticket-by-id', {
      id: parseInt(id),
    });
    return response;
  } catch (error) {
    console.log('An Error Occured while trying to get a ticket:', error);
  }
};
