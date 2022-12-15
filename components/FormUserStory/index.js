

import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd';
const layout = {
    labelCol: {
        span: 8
        ,
    },
    wrapperCol: {
        span: 12,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

export default function FormUserStory(props) {
    const { title } = props
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <>
            <h1 className="font-bold text-3xl text-center my-4">{title}</h1>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}
                    label="Project Title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'description']} label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Date"
                    rules={[
                        {
                            type: 'object',
                            required: true,
                            message: 'Please select time!',
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item label="DEV Owner">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="QA Owner">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Interaction">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Product Owner">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 10,
                    }}
                >
                    <Button htmlType="submit" className="bg-[#512DA8] text-white hover:bg-black h-10 font-bold">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};