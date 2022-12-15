import "../styles/globals.css";
import dynamic from "next/dynamic";
import "@solana/wallet-adapter-react-ui/styles.css";
import { AutoConnectProvider } from "../context/AutoConnectProvider";
import { AuthenticationContextProvider } from "../context/AuthenticationContextProvider";
const WalletConnectionProvider = dynamic(
  () => import("../context/WalletConnectionProvider/index"),
  {
    ssr: false,
  }
);
function MyApp({ Component, pageProps }) {
  return (
    <AutoConnectProvider>
        <Providers>
          <Component {...pageProps} />
        </Providers>
    </AutoConnectProvider>
  );
}

function Providers({ children }) {
  return (
      <WalletConnectionProvider>
        <AuthenticationContextProvider>
          {children}
        </AuthenticationContextProvider>
      </WalletConnectionProvider>
  );
}
export default MyApp;
