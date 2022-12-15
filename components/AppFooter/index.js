import { Divider, Layout } from 'antd';
const { Footer } = Layout;
export default function AppFooter() {
    return (
        <div className='mx-4'>
            <Divider className='m-0' />
            <Footer className="text-center py-4"
            >
                @ Solance, 2021 Powered
            </Footer>
        </div>
    )
}