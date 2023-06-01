import axiosMe from '@/api/axios';
import { setAuthToken } from '@/store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

type TToken = {
	accessToken: string;
};
const useRefreshToken = () => {
	const dispatch = useAppDispatch();
	const tokens = useAppSelector(state => state.auth.tokens);
	const refresh = async () => {
		const response = await axiosMe.post<TToken>('/token', {
			token: tokens.refreshToken,
		});
		// const response = await axiosMe.get<TToken>(
		// 	'/token',
		// 	{
		// 		headers: {
		// 			Authorization: `Bearer ${tokens.refreshToken}`,
		// 		},
		// 	}
		// );
		dispatch(
			setAuthToken({
				refreshToken: tokens.refreshToken,
				accessToken: response.data.accessToken,
			})
		);
		return response.data.accessToken;
	};

	return refresh;
};

export default useRefreshToken;
