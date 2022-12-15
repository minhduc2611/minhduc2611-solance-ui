import { useWallet } from "@solana/wallet-adapter-react";
import MainView from "../components/mainView";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAuthenticationContext } from "../context/AuthenticationContextProvider";
import { useRouter } from "next/router";

export default function Home() {
  const { connected } = useAuthenticationContext();
  const router = useRouter()
  if (connected) {
    router.push('home', undefined, { shallow: true })
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="loginContainer">
          <WalletMultiButton />
        </div>
      </main>
    </div>
  );
}
