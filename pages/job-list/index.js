import {
    DesktopOutlined,
    FileOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
    BarChartOutlined,
    LockOutlined,
    CloseCircleOutlined,
} from '@ant-design/icons';
import { Button, Layout, Select } from 'antd';
import JobListItem from '../../components/JobListItem';
import LayoutPage from '../../components/LayoutPage';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Dashboard', '1', <BarChartOutlined />),
    getItem('Resources', '2', <DesktopOutlined />),
    getItem('Project Management', 'sub1', <UserOutlined />),
    getItem('Account', 'sub2', <TeamOutlined />),
    getItem('Settings', '3', <SettingOutlined />),
    getItem('Login', '4', <LockOutlined />),
    getItem('Register', '5', <FileOutlined />),
    getItem('Error', '6', <CloseCircleOutlined />),
];
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Start date',
        dataIndex: 'startDate',
    },
    {
        title: 'End date',
        dataIndex: 'endDate',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];
const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        requiredStaking: 32,
        devowner: `uservi ${i}`,
        action: <Button htmlType="submit" className="bg-[#512DA8] text-white hover:bg-black h-10 font-bold">
            Action
        </Button>
    });
}
const mockData = [
    {
        id: 1,
        name: "What Does a Front End Web Developer Do?",
        descriptions: "Many actions a developer performs daily require skills like JavaScript or HTML coding, with a great deal of overlap in their day-to-day responsibilities. In this tutorial, we will explain the various tools and technologies these professionals use in their everyday work, as well as the skills needed to be successful in the field.",
        owner: "Duc Le",
        tasks: [
            {
                id: 1,
                startDate: "1/1/2023",
                endDate: "30/3/2023",
                devOwner: {
                    name: "dev1"
                },
                name: 'Add button inactive for hero section',
                description: 'development'
            },
            {
                id: 2,
                startDate: "1/1/2023",
                endDate: "30/3/2023",
                devOwner: {
                    name: "dev1"
                },
                name: 'Remove button edit for security section',
                description: 'development'
            },
        ]
    },
    {
        id: 2,
        name: "Creating Maintaining Mobile and Responsive Design",
        descriptions: "With the rise of people using mobile devices to connect to the internet, it has become essential for websites to be mobile-friendly. As such, most front end developers now create responsive designs or mobile designs for their websites. Responsive design changes a website’s layout depending on the device and screen size, and occasionally requiring changes to the content and functionality based on those factors.",
        owner: "Vi Phan",
        tasks: [
            {
                id: 1,
                startDate: "1/1/2023",
                endDate: "30/3/2023",
                devOwner: {
                    name: "dev1"
                },
                name: 'Add button inactive for hero section',
                description: 'development'
            },
            {
                id: 2,
                startDate: "1/1/2023",
                endDate: "30/3/2023",
                devOwner: {
                    name: "dev1"
                },
                name: 'Remove button edit for security section',
                description: 'development'
            },
        ]
    },
    {
        id: 3,
        name: "Developing Across Browsers",
        descriptions: "If your web development isn’t functional across the full range of browsers that are available today, you will miss out on an entire category of potential web users. While browsers are fairly consistent, their differences can be significant, including in terms of coding interpretation. A front end web developer must understand these differences and incorporate them into their code. ",
        owner: "Duy Dinh",
        tasks: [
            {
                id: 1,
                startDate: "1/1/2023",
                endDate: "30/3/2023",
                devOwner: {
                    name: "dev1"
                },
                name: 'Add button inactive for hero section',
                description: 'development'
            },
            {
                id: 2,
                startDate: "1/1/2023",
                endDate: "30/3/2023",
                devOwner: {
                    name: "dev1"
                },
                name: 'Remove button edit for security section',
                description: 'development'
            },
        ]
    }
]
const options = [
    {
        value: '1',
        label: 'Not Identified',
    },
    {
        value: '2',
        label: 'Closed',
    },
    {
        value: '3',
        label: 'Communicated',
    },
    {
        value: '4',
        label: 'Identified',
    },
    {
        value: '5',
        label: 'Resolved',
    },
    {
        value: '6',
        label: 'Cancelled',
    },
]
const wrapperChildren = (
    <div className='flex mt-4 mx-4 bg-white p-4 justify-between'>
        <Select
            showSearch
            style={{
                width: 250,
            }}
            placeholder="Name"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
        />
        <Select
            showSearch
            style={{
                width: 250,
            }}
            placeholder="Owner"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
        />
        <Select
            showSearch
            style={{
                width: 250,
            }}
            placeholder="Start Date"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
        />
        <Select
            showSearch
            style={{
                width: 250,
            }}
            placeholder="End Date"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
        />
        <Button htmlType="submit" className="bg-[#512DA8] text-white hover:bg-black h-8 font-bold">
            Search
        </Button>
    </div>
)
export default function JobList() {
    return (
        <>
            <LayoutPage items={items} wrapperChildren={wrapperChildren}>
                {
                    mockData?.map((i) => {
                        let arr = []
                        for (let k = 0; k < i.tasks.length; k++) {
                            arr.push({
                                id: i.tasks[k].id,
                                startDate: i.tasks[k].startDate,
                                endDate: i.tasks[k].endDate,
                                devOwner: {
                                    name: "dev1"
                                },
                                name: i.tasks[k].name,
                                description: i.tasks[k].description,
                                action: <Button htmlType="submit" className="bg-[#512DA8] text-white hover:bg-black h-10 font-bold">
                                    Apply
                                </Button>
                            })
                        }
                        return (
                            <JobListItem
                                id={i.id}
                                descriptions={i.descriptions}
                                name={i.name}
                                owner={i.owner}
                                columns={columns}
                                data={arr} />
                        )
                    })
                }
            </LayoutPage>
        </>

    )
}