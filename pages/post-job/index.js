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
import { Button, Modal } from "antd";
import { useState } from "react";
import FormUserStory from "../../components/FormUserStory";
import TableData from "../../components/TableData";
import LayoutPage from "../../components/LayoutPage";
import { useRouter } from "next/router";

const columns = [
  {
    title: "User Story",
    dataIndex: "userstory",
  },
  {
    title: "Point",
    dataIndex: "point",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "DEV Owner",
    dataIndex: "devowner",
  },
  {
    title: "QA Owner",
    dataIndex: "qaowner",
  },
  {
    title: "Product Owner",
    dataIndex: "po",
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
    po: `userduc ${i}`,
  });
}
export default function PostJob() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
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
    <div className="flex justify-between items-center m-5 ">
      <h1 className="font-bold text-3xl">My Posted Jobs</h1>
      <Button className="bg-[#5048E5] text-white" onClick={showModal}>
        Add Job
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <FormUserStory title="Create New Job" />
      </Modal>
    </div>
  );
  let checkUserLogin;
  let checkRoleUser;
  // if (typeof window !== "undefined") {
  //   checkUserLogin = Boolean(localStorage.getItem("userlogin"));
  //   checkRoleUser = localStorage.getItem("role");
  //   if (!(checkUserLogin && checkRoleUser === "po")) {
  //     router.push("/job-list");
  //   }
  // }

  return (
    <>
      <LayoutPage wrapperChildren={wrapperChildren}>
        <TableData data={data} columns={columns} />
      </LayoutPage>
    </>
  );
}
