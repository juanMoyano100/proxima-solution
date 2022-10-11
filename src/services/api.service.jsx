
import axios from 'axios';

const baseURL = "https://webhook.site";

const axiosInstance = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;