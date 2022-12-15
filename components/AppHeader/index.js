import { Avatar, Input, Layout } from 'antd';
import {
    TeamOutlined,
    UserOutlined,
    SearchOutlined,
    BellFilled,
} from '@ant-design/icons';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import dynamic from 'next/dynamic';
const { Header } = Layout;

// const WalletConnectionBtn = dynamic(
//     () => import('../../components/ConnectWallet/index'), {
//     ssr: false
//   })
export default function AppBar(props) {
    return (
        <>
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <div className='mx-5 w-3/5'>
                    <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
                </div>
                <div className='mx-5 flex items-center'>
                    <TeamOutlined style={{ margin: "0 1rem" }} />
                    <BellFilled style={{ margin: "0 1rem" }} />
                    <Avatar icon={<UserOutlined />} style={{ margin: "0 1rem" }} />
                    <WalletMultiButton />
                </div>
            </Header>
        </>
    )
}