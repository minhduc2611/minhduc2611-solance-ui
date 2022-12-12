import {
    DesktopOutlined,
    FileOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
    BarChartOutlined,
    LockOutlined,
    CloseCircleOutlined,
} from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import FormUserStory from '../../components/FormUserStory';
import TableData from '../../components/TableData';
import LayoutPage from '../../components/LayoutPage';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Dashboard', '1', <BarChartOutlined />),
    getItem('Resources', '2', <DesktopOutlined />),
    getItem('Project Management', 'sub1', <UserOutlined />),
    getItem('Account', 'sub2', <TeamOutlined />),
    getItem('Settings', '3', <SettingOutlined />),
    getItem('Login', '4', <LockOutlined />),
    getItem('Register', '5', <FileOutlined />),
    getItem('Error', '6', <CloseCircleOutlined />),
];
const columns = [
    {
        title: 'User Story',
        dataIndex: 'userstory',
    },
    {
        title: 'Point',
        dataIndex: 'point',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'DEV Owner',
        dataIndex: 'devowner',
    },
    {
        title: 'QA Owner',
        dataIndex: 'qaowner',
    },
    {
        title: 'Product Owner',
        dataIndex: 'po',
    },
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        userstory: `Edward King ${i}`,
        point: 32,
        address: `London, Park Lane no. ${i}`,
        devowner: `uservi ${i}`,
        qaowner: `userduy ${i}`,
        po: `userduc ${i}`
    });
}
export default function PostJob() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const wrapperChildren = (
        <div className='flex justify-between items-center m-5 '>
            <h1 className='font-bold text-3xl'>Project Solance</h1>
            <Button className='bg-[#5048E5] text-white' onClick={showModal}>Add UserStory</Button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <FormUserStory title="Post User Story" />
            </Modal>
        </div>
    )
    return (
        <>
            <LayoutPage items={items} wrapperChildren={wrapperChildren}>
                <TableData data={data} columns={columns} />
            </LayoutPage>
        </>

    )
}