import { useEffect } from 'react';

import axiosMe from '@/api/axios';
import { useAppSelector } from '@/store/hooks';

import useRefreshToken from './useRefreshToken';

const useAxiosPrivate = () => {
	const refresh = useRefreshToken();
	const tokens = useAppSelector(state => state.auth.tokens);

	useEffect(() => {
		const requestInterceptor = axiosMe.interceptors.request.use(
			config => {
				if (!config.headers.Authorization) {
					config.headers.Authorization = `Bearer ${tokens?.accessToken}`;
				}
				return config;
			},
			error => Promise.reject(error)
		);

		const responseInterceptor = axiosMe.interceptors.response.use(
			response => response,
			async error => {
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const newAccessToken = await refresh();
					prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
					return axiosMe(prevRequest);
				}
				return Promise.reject(error);
			}
		);
		return () => {
			axiosMe.interceptors.request.eject(requestInterceptor);
			axiosMe.interceptors.response.eject(responseInterceptor);
		};
	}, [tokens.accessToken, refresh]);

	return axiosMe;
};

export default useAxiosPrivate;
