import axios from 'axios';

const BASE_URL = 'https://64ddd055825d19d9bfb18e18.mockapi.io';

export const fetchCars = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cars`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};