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

const data = [
  {
    title:
      "F222336 - Full Stack Developer with experience implementing search features. (Upwork newcomers welcome)",
    count: "40",
    disabled: true
  },
  {
    title:
      "F123236 - Zillow Clone website in React and Node",
    count: "40",
    disabled: true
  },
  {
    title:
      "F1213456 - Technical Writer for React/Node/DevOps (Developers only) ",
    count: "60",
    disabled: false
  },
  {
    title:
      "F126156 - Complete the given Django and React task (customization).",
    count: "100",
    disabled: true
  },
  {
    title:
      "F12333 - Full-stack Developer - MERN",
    count: "20",
    disabled: false
  },
];

export default function Home() {
  let checkUserLogin;
  let checkRoleUser;
  const router = useRouter();
  // if (typeof window !== "undefined") {
  //   checkUserLogin = Boolean(localStorage.getItem("userlogin"));
  //   checkRoleUser = localStorage.getItem("role");
  //   if (!(checkUserLogin && checkRoleUser === "dev")) {
  //     router.push("/home");
  //   }
  // }
  return (
    <>
      <LayoutPage>
        <AppContent
          title="My Task"
          data={data}
          hasTasks={true}
          isShowBtn={true}
        />
      </LayoutPage>
    </>
  );
}
