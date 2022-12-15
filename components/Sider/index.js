import { Image, Divider, Layout, Menu, Row, Col } from 'antd';
import { useState } from 'react';
import solana_logo from '../../images/solana-logo.png'
const { Sider } = Layout;


export default function Sidebar(props) {
    const { items } = props
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} style={{ backgroundColor: "#111827", fontWeight: "500" }} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo flex justify-left p-5">
                <Image src="https://cryptologos.cc/logos/solana-sol-logo.png" preview={false} width={40} />
            </div>
            <Divider className='bg-[#6B7280] mb-2' />
            <Menu theme="dark" style={{ backgroundColor: "#111827" }} defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider >
    )
}