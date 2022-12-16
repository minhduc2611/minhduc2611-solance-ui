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
import { Layout } from "antd";
import { useRouter } from "next/router";
import AppContent from "../../components/AppContent";
import LayoutPage from "../../components/LayoutPage";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <BarChartOutlined />),
  getItem("Resources", "2", <DesktopOutlined />),
  getItem("Project Management", "sub1", <UserOutlined />),
  getItem("Account", "sub2", <TeamOutlined />),
  getItem("Settings", "3", <SettingOutlined />),
  getItem("Login", "4", <LockOutlined />),
  getItem("Register", "5", <FileOutlined />),
  getItem("Error", "6", <CloseCircleOutlined />),
];
const data = [
  {
    title:
      "F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    count: "500",
  },
  {
    title:
      "F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    count: "500",
  },
  {
    title:
      "F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    count: "500",
  },
  {
    title:
      "F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    count: "500",
  },
  {
    title:
      "F123456 - Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    count: "500",
  },
];

export default function Home() {
  let checkUserLogin;
  let checkRoleUser;
  const router = useRouter();
  if (typeof window !== "undefined") {
    checkUserLogin = Boolean(localStorage.getItem("userlogin"));
    checkRoleUser = localStorage.getItem("role");
    if (!(checkUserLogin && checkRoleUser === "dev")) {
      router.push("/home");
    }
  }
  return (
    checkRoleUser &&
    checkUserLogin(
      <>
        <LayoutPage items={items}>
          <AppContent
            title="My Task"
            data={data}
            hasTasks={true}
            isShowBtn={true}
          />
        </LayoutPage>
      </>
    )
  );
}
