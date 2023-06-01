import type { AxiosInstance } from 'axios';
import baseAxios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { parseCookies, setCookie } from 'nookies';

import {
	AUTH_COOKIE_TIME_DELTA,
	AUTH_TOKEN,
	AUTH_TOKEN_COOKIE,
	COOKE_ENABLE_SECURE,
	COOKIE_PATH,
	COOKIE_SAME_SITE,
	REFRESH_TOKEN,
	REMEMBER_ME,
} from '@/constants';

const baseURL = import.meta.env.VITE_API_URL?.toString();
export const getAxios = (ctx: any): AxiosInstance => {
	const instance = baseAxios.create({
		baseURL,
		headers: { 'Content-Type': 'application/json' },
	});
	instance.interceptors.request.use((config: { headers: any; params?: any }) => {
		const cookies = parseCookies(null);
		if (!ctx && cookies[AUTH_TOKEN_COOKIE])
			config.headers.Authorization = cookies[AUTH_TOKEN_COOKIE];
		return config;
	});

	const refreshAuthLogic = (failedRequest: any) => {
		const cookies = parseCookies(null);

		return baseAxios
			.post(`${baseURL}/auth/token`, {
				refresh_token: cookies[REFRESH_TOKEN],
			})
			.then(tokenRefreshResponse => {
				const token = `Bearer ${tokenRefreshResponse.data[AUTH_TOKEN]}`;
				setCookie(null, AUTH_TOKEN_COOKIE, token, {
					path: COOKIE_PATH,
					maxAge: cookies[REMEMBER_ME] ? AUTH_COOKIE_TIME_DELTA : undefined,
					secure: COOKE_ENABLE_SECURE,
					sameSite: COOKIE_SAME_SITE,
				});
				failedRequest.response.config.headers.Authorization = token;
				return Promise.resolve();
			});
	};

	createAuthRefreshInterceptor(instance, refreshAuthLogic, {
		statusCodes: [403],
	});
	return instance;
};

const axios = getAxios(null);
export default axios;
