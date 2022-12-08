import { Descriptions } from 'antd';
export default function DescriptionDetails(props) {
    const { description } = props
    return (
        <>
            <Descriptions title="Descriptions" layout="vertical" className='border-2 p-3 mb-2'>
                <Descriptions.Item span={2}>
                    {description}
                </Descriptions.Item>
            </Descriptions>
        </>

    )
}
