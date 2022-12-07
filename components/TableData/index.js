
import { Table } from 'antd';
import { useState } from 'react';
const columns = [
    {
        title: 'User Story',
        dataIndex: 'userstory',
    },
    {
        title: 'Point',
        dataIndex: 'point',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'DEV Owner',
        dataIndex: 'devowner',
    },
    {
        title: 'QA Owner',
        dataIndex: 'qaowner',
    },
    {
        title: 'Product Owner',
        dataIndex: 'po',
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
        po: `userduc ${i}`
    });
}
export default function TableData() {
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