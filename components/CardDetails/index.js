import { Card } from 'antd';
import DescriptionDetails from '../DescriptionDetails';
import TableData from '../TableData';



export default function CardDetails(props) {
  const { title, data, columns, description } = props
  return (
    <>
      <Card
        title={title}
        className="m-4"
      >
        <DescriptionDetails description={description}/>
        <TableData data={data} columns={columns} />
      </Card>
    </>
  )

}