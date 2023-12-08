const BASE_URL = 'https://64ddd055825d19d9bfb18e18.mockapi.io'

export const fetchCars = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};
