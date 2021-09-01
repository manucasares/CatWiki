import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = 'https://api.thecatapi.com/v1';

export const searchActiveCatImages = async (breed_id = '') => {
	try {
		const { data } = await axios.get(`${BASE_URL}/images/search`, {
			params: {
				api_key: process.env.REACT_APP_CAT_APIKEY,
				breed_id,
				limit: 8,
			},
		});

		const images = data.map((img) => img.url);

		return images;
	} catch (error) {
		toast.error('Error getting photos');
	}
};
