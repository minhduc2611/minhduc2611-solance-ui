import {
  BarChartOutlined,
  CloseCircleOutlined,
  DesktopOutlined,
  FileOutlined,
  LockOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import { useRouter } from "next/router";
import AppContent from "../../components/AppContent";
import LayoutPage from "../../components/LayoutPage";
const { Content } = Layout;

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
  // if (typeof window !== "undefined") {
  //   checkUserLogin = Boolean(localStorage.getItem("userlogin"));
  //   checkRoleUser = localStorage.getItem("role");
  //   if (!(checkUserLogin && checkRoleUser === "po")) {
  //     router.push("/job-list");
  //   }
  // }
  return (
    <>
      <LayoutPage>
        <AppContent title="My Job" data={data} />
      </LayoutPage>
    </>
  );
}
