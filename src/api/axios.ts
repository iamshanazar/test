import type { AxiosInstance } from 'axios';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_AUTH?.toString();

const getAxios = (): AxiosInstance => {
	const instance = axios.create({
		baseURL: BASE_URL,
		headers: { 'Content-Type': 'application/json' },
	});

	return instance;
};

const axiosMe = getAxios();
export default axiosMe;
