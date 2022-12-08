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
import { Button, Layout } from 'antd';
import Sidebar from '../../components/Sider';
import AppBar from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import AppContent from '../../components/AppContent';
import CardDetails from '../../components/CardDetails';
import DescriptionDetails from '../../components/DescriptionDetails';
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
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Required Staking',
        dataIndex: 'requiredStaking',
    },
    {
        title: 'Dev Owner',
        dataIndex: 'devowner',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];
const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        requiredStaking: 32,
        devowner: `uservi ${i}`,
        action: <Button htmlType="submit" className="bg-[#512DA8] text-white hover:bg-black h-10 font-bold">
            Action
        </Button>
    });
}
const description = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
export default function JobDetails() {
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar items={items} />
                <Layout className="site-layout">
                    <AppBar />
                    <Content style={{ margin: '0 16px' }} >
                        <CardDetails title="F112345 - Change logic for new UI" columns={columns} data={data} description={description} />
                    </Content>
                    <AppFooter />
                </Layout>
            </Layout>
        </>

    )
}