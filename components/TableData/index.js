
import { Table } from 'antd';
import { useState } from 'react';

export default function TableData(props) {
    const { data, columns } = props
    // todo: handle select
    // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // const onSelectChange = (newSelectedRowKeys) => {
    //     console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    //     setSelectedRowKeys(newSelectedRowKeys);
    // };
    // const rowSelection = {
    //     selectedRowKeys,
    //     onChange: onSelectChange,
    //     selections: [
    //         Table.SELECTION_ALL,
    //         Table.SELECTION_INVERT,
    //         Table.SELECTION_NONE,
    //         {
    //             key: 'odd',
    //             text: 'Select Odd Row',
    //             onSelect: (changableRowKeys) => {
    //                 let newSelectedRowKeys = [];
    //                 newSelectedRowKeys = changableRowKeys.filter((_, index) => {
    //                     if (index % 2 !== 0) {
    //                         return false;
    //                     }
    //                     return true;
    //                 });
    //                 setSelectedRowKeys(newSelectedRowKeys);
    //             },
    //         },
    //         {
    //             key: 'even',
    //             text: 'Select Even Row',
    //             onSelect: (changableRowKeys) => {
    //                 let newSelectedRowKeys = [];
    //                 newSelectedRowKeys = changableRowKeys.filter((_, index) => {
    //                     if (index % 2 !== 0) {
    //                         return true;
    //                     }
    //                     return false;
    //                 });
    //                 setSelectedRowKeys(newSelectedRowKeys);
    //             },
    //         },
    //     ],
    // };
    return <Table columns={columns} dataSource={data} />;
};