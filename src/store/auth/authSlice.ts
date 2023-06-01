import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TMe = {
	accessToken: string;
	refreshToken: string;
};

type SliceState = {
	username: string;
	tokens: TMe;
};

const initialState: SliceState = {
	username: '',
	tokens: {} as TMe,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthToken(state, action: PayloadAction<TMe>) {
			state.tokens = action.payload;
		},
		setUserName(state, action: PayloadAction<string>) {
			state.username = action.payload;
		},
	},
});

export const { setAuthToken, setUserName } = authSlice.actions;
export default authSlice.reducer;
