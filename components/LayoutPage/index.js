import { Layout } from "antd";
import AppFooter from "../AppFooter";
import AppBar from "../AppHeader";
import Sidebar from "../Sider";
const { Content } = Layout;

export default function LayoutPage(props) {
    const { items, wrapperChildren, children } = props
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar items={items} />
                <Layout className="site-layout">
                    <AppBar />
                    {wrapperChildren}
                    <Content className="bg-white m-5 rounded-2xl">
                        {children}
                    </Content>
                    <AppFooter />
                </Layout>
            </Layout>
        </>
    )
}