import { Table } from "antd";

export default function TableData(props) {
  const { data, columns } = props;
  return <Table columns={columns} dataSource={data} />;
}
