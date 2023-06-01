import { setCookie } from 'nookies';

import {
	AUTH_COOKIE_TIME_DELTA,
	AUTH_TOKEN,
	AUTH_TOKEN_COOKIE,
	COOKE_ENABLE_SECURE,
	COOKIE_DEFAULT_AGE,
	COOKIE_PATH,
	COOKIE_SAME_SITE,
	REFRESH_TOKEN,
	REMEMBER_ME,
} from '@/constants';
// import type { TLoginResponse } from '@/types/auth';

const setAuthCookies = (data: any, remember: boolean) => {
	let maxAge;
	if (remember) {
		maxAge = AUTH_COOKIE_TIME_DELTA;
		setCookie(null, REMEMBER_ME, 'true', {
			path: COOKIE_PATH,
			maxAge: COOKIE_DEFAULT_AGE,
			secure: COOKE_ENABLE_SECURE,
		});
	}
	setCookie(null, AUTH_TOKEN_COOKIE, `Bearer ${data[AUTH_TOKEN]}`, {
		path: COOKIE_PATH,
		maxAge,
		secure: COOKE_ENABLE_SECURE,
		sameSite: COOKIE_SAME_SITE,
	});
	setCookie(null, REFRESH_TOKEN, data[REFRESH_TOKEN], {
		path: COOKIE_PATH,
		maxAge,
		secure: COOKE_ENABLE_SECURE,
		sameSite: COOKIE_SAME_SITE,
	});
};

export default setAuthCookies;
