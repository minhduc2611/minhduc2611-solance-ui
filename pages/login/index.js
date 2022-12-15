

import { Avatar, Button, Checkbox, Col, Form, Input, Row } from 'antd';
import dynamic from 'next/dynamic'
import '@solana/wallet-adapter-react-ui/styles.css'

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const WalletConnectionBtn = dynamic(
        () => import('../../components/ConnectWallet/index'), {
        ssr: false
      })
    return (
        <Row className='bg-[#512DA8] h-screen' >
            <Col span={8}></Col>
            <Col span={8} className='flex-column bg-white m-auto rounded-2xl'>
                <Row justify="center" className='mt-5'>
                    <Avatar size={64} src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" />
                </Row>
                <h1 className='text-3xl font-bold text-center mb-8'>Sign In</h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        wrapperCol={{ offset: 4, span: 16 }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <p className='font-bold pb-2'>Username</p>
                        <Input placeholder="Enter username" className='h-12' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        wrapperCol={{ offset: 4, span: 16 }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <p className='font-bold pb-2'>Password</p>
                        <Input.Password placeholder="Enter password" className='h-12' />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 4, span: 16 }}
                    >
                        <Checkbox className='font-bold'>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 4, span: 16 }}
                    >
                        <Button htmlType="submit" className="bg-[#512DA8] w-full text-white hover:bg-black h-12 font-bold">
                            Submit
                        </Button>
                        {/* <WalletMultiButton /> */}
                        <WalletConnectionBtn/>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={8}></Col>
        </Row>

    );
}

export default Login