import { Button, Card, Descriptions, Modal } from "antd";
import { useState } from "react";
import TableData from "../TableData";
const { Meta } = Card;

export default function JobListItem(props) {
  const { id, name, descriptions, owner, columns, data } = props;
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
  console.log(props);
  return (
    <>
      <Card hoverable className="m-2">
        <p className="font-bold text-2xl">{name}</p>
        <Descriptions>
          <Descriptions.Item>{descriptions}</Descriptions.Item>
        </Descriptions>
        <div className="flex justify-between">
          <Descriptions title="Budget">
            <Descriptions.Item>100</Descriptions.Item>
          </Descriptions>
          <Descriptions title="Task">
            <Descriptions.Item>2 task available</Descriptions.Item>
          </Descriptions>
        </div>
        <div className="flex justify-between">
          <Descriptions title="Time">
            <Descriptions.Item>2 weeks</Descriptions.Item>
          </Descriptions>
          <Descriptions title="Stacks">
            <Descriptions.Item>ReactJS</Descriptions.Item>
          </Descriptions>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-base">{owner}</p>
          <Button
            htmlType="submit"
            value={id}
            className="bg-[#512DA8] text-white hover:bg-black h-10 font-bold"
            onClick={showModal}
          >
            Apply Now
          </Button>
        </div>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={1000}
        >
          <h1 className="font-bold text-2xl text-center my-4">
            Task Available
          </h1>
          <TableData columns={columns} data={data} />
        </Modal>
      </Card>
    </>
  );
}
