export const AUTH_TOKEN = 'access_token';
export const AUTH_TOKEN_COOKIE = 'Authorization';
export const REFRESH_TOKEN = 'refresh_token';
export const AUTH_COOKIE_TIME_DELTA = 10 * 30 * 24 * 60 * 60; // 1 month

export const COOKIE_PATH = import.meta.env.VITE_COOKIE_PATH;
export const COOKE_ENABLE_SECURE = import.meta.env.VITE_COOKIE_PATH === 'true';
export const COOKIE_SAME_SITE = 'strict';
export const COOKIE_DEFAULT_AGE = 10 * 365 * 24 * 60 * 60;
export const REMEMBER_ME = 'remember_me';
