
import { Button, List, Pagination } from 'antd';


export default function AppContent(props) {
    const { data, title, hasTask, isShowBtn } = props
    return (
        <>
            <List
                header={<h1 className="font-bold text-3xl text-center">{title}</h1>}
                className="bg-white my-5 rounded-2xl"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<b><a href="https://ant.design">{item.title}</a></b>}
                            description={
                                <>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p><b>Total budget:</b> {item.count} SOL</p>
                                            {/* <p><b>Total tasks:</b> 2</p> */}
                                            {hasTask && <p><b>Status:</b> Success</p>}
                                        </div>
                                        <div>
                                            {isShowBtn && <Button htmlType="submit" disabled={item.disabled} className="bg-[#512DA8] w-full text-white hover:bg-black h-10 font-bold">
                                                Claim Earning
                                            </Button>}
                                        </div>
                                    </div>
                                </>
                            }
                        />
                    </List.Item>
                )}
                footer={<Pagination defaultCurrent={1} total={50} className="flex justify-center" />}
            />
        </>
    )
}
