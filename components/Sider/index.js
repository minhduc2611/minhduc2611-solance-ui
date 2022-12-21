import { Image, Divider, Layout, Menu, Row, Col } from "antd";
import { useState } from "react";
import Link from 'next/link'

import solana_logo from "../../images/solana-logo.png";
const { Sider } = Layout;
import {
  DesktopOutlined,
  FileOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
  BarChartOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
export default function Sidebar(props) {
    const router = useRouter()
  function getItem(label, to, key, roles, icon, children) {
    // user role = "dev"
    // roles.inludes(user.role);
    // role not appropriate -> disabled 
    let disabled = false
    return {
      key,
      icon,
      children,
      label:(<Link href={to}>{label}</Link>),
      disabled,
      to
    };
  }

  const items = [
    getItem("Jobs", "/home", "1", [], <BarChartOutlined />),
    getItem("My Posted Jobs", "/post-job", "2", [],<DesktopOutlined />),
    getItem("Post Jobs", "/job-list", "3", [],<DesktopOutlined />),
    getItem("Jobs Details", "/job-details", "31", [],<DesktopOutlined />),
    getItem("My Tasks", "/tasks", "4", [],<UserOutlined />),
    getItem("Account", "/", "5", [],<TeamOutlined />),
    getItem("Settings", "/", "6", [],<SettingOutlined />),
    // getItem("Login", "home", "4", [],<LockOutlined />),
    // getItem("Register", "home", "5", [],<FileOutlined />),
    // getItem("Error", "home", "6", [],<CloseCircleOutlined />),
  ];

  const [collapsed, setCollapsed] = useState(false);
  const selected = items.filter(i => {
    return router.asPath == i.to
}).map(i => i.key)
console.log('selected', selected)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      style={{ backgroundColor: "#111827", fontWeight: "500" }}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo flex justify-left p-5">
        <Image
          src="https://cryptologos.cc/logos/solana-sol-logo.png"
          preview={false}
          width={40}
        />
      </div>
      <Divider className="bg-[#6B7280] mb-2" />
      <Menu
        theme="dark"
        style={{ backgroundColor: "#111827" }}
        defaultSelectedKeys={["1"]}
        selectedKeys={selected}
        mode="inline"
        renderIte={((item, index) => {
            <Link key={index}>{item.to}</Link>
        })}
        items={items}
      />
    </Sider>
  );
}
