import { UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import type { FC } from 'react';

const Register: FC = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed: ;;;', errorInfo);
	};
	return (
		<div style={{ marginLeft: '500px', width: '100%' }}>
			<Form
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<div style={{ marginTop: '250px', width: '100%', padding: 'auto' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							padding: '50px',
							marginLeft: '150px'
						}}
					>
						<UserOutlined style={{ fontSize: '80px' }} />
					</div>
					<Form.Item
						label='Username'
						name='username'
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Password'
						name='password'
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};
export default Register;
