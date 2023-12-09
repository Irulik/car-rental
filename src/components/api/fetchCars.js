import axios from 'axios';

const BASE_URL = 'https://64ddd055825d19d9bfb18e18.mockapi.io';

// export const LIMIT = 12;

export const fetchCars = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/adverts`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching adverts:', error);
    throw error;
  }
};