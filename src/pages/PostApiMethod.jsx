import axios from 'axios';

const postSelectedWafers = async (selectedWafers) => {
  try {
    const payload = {
      waferIds: selectedWafers, // assuming 'selectedWafers' is an array of IDs
    };

    const response = await axios.post('https://api.example.com/checkWafers', payload);

    if (response.data.success) {
      const { criteriaMet } = response.data; // assuming 'criteriaMet' is the boolean from the response
      return criteriaMet; // true or false, depending on the backend response
    } else {
      console.error('API response was not successful');
      return false;
    }
  } catch (error) {
    console.error('Error occurred while sending API request:', error);
    return false;
  }
};

export default postSelectedWafers;
