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
import { Button, Input, Layout, Modal } from 'antd';
import Sidebar from '../../components/Sider';
import AppBar from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import { useState } from 'react';
import FormUserStory from '../../components/FormUserStory';
import TableData from '../../components/TableData';
const { Content } = Layout;
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
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar items={items} />
                <Layout className="site-layout">
                    <AppBar />
                    <div className='flex justify-between items-center m-5 '>
                        <h1 className='font-bold text-3xl'>Project Solance</h1>
                        <Button className='bg-[#5048E5] text-white' onClick={showModal}>Add UserStory</Button>
                        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                            <FormUserStory title="Post User Story" />
                        </Modal>
                    </div>
                    <Content className="bg-white m-5 rounded-2xl">
                        <TableData data={data} columns={columns} />
                    </Content>
                    <AppFooter />
                </Layout>
            </Layout>
        </>

    )
}