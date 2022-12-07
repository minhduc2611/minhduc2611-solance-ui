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
import { Layout } from 'antd';
import Sidebar from '../../components/Sider';
import AppBar from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import AppContent from '../../components/AppContent';
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
const data = [
    {
        title: 'F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        count: '500'
    },
    {
        title: 'F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        count: '500'
    },
    {
        title: 'F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        count: '500'
    },
    {
        title: 'F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        count: '500'
    },
    {
        title: 'F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        count: '500'
    },

];
export default function Home() {
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar items={items} />
                <Layout className="site-layout">
                    <AppBar />

                    <Content style={{ margin: '0 16px' }} >
                        <AppContent title="My Task" data={data} hasTasks={true} isShowBtn={true} />
                    </Content>
                    <AppFooter />
                </Layout>
            </Layout>
        </>

    )
}