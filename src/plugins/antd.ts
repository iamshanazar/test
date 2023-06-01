import type { ThemeConfig } from 'antd';

const customTheme: ThemeConfig = {
	token: {
		colorPrimary: '#109cf1',
		fontSize: 14,
		controlHeight: 35,
		colorBgLayout: '#e5e5e5',
		colorBgBase: '#fff',
		colorBgContainer: '#ffffff',
		paddingContentVertical: 1,
		screenLGMax: 1200,
		colorText: '#334D6E',
	},
	components: {
		Input: {
			controlPaddingHorizontal: 24,
		},
	},
};

export default customTheme;
