import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";
import { SOLANA_HOST } from "../../utils/const";
import { useAutoConnect } from "../AutoConnectProvider";

const WalletConnectionProvider = ({ children }) => {
  const endpoint = useMemo(() => SOLANA_HOST, []);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  const {autoConnect} = useAutoConnect();
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={autoConnect}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
