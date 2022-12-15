import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const anchor = require("@project-serum/anchor");
import { useLocalStorage, useWallet } from "@solana/wallet-adapter-react";
export const AuthenticationContext = createContext();
export const useAuthenticationContext = () =>
  React.useContext(AuthenticationContext);

/**
 * Check Login with Phantom wallet and User in DB
 */
export const AuthenticationContextProvider = ({ children }) => {
  const [hasPhantom, setHasPhantom] = useState(true);
  const [connected, setConnected] = useState(false);
  const [phantom, setPhantom] = useState();
  const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', true);

  const wallet = useWallet();
  const connectPhantomWallet = () => {
    phantom.connect();
  };

  const signup = async (username, profile) => {
    if (!connected) {
      alert("Connect wallet first");
      return;
    }

    const wallet = useWallet();
    const connection = new anchor.web3.Connection(SOLANA_HOST);

    const program = getProgramInstance(connection, wallet);

    let [user_pda] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode("user"), wallet.publicKey.toBuffer()],
      program.programId
    );

    try {
      const userInfo = await program.account.userAccount.fetch(user_pda);
      console.log(userInfo);
    } catch (e) {}
  };
  const isSigedIn = async () => {};
  const hasUserAssociatedWithWallet = async () => {};
  useEffect(() => {
    const provider = getProvider();
    if (!provider) {
      setHasPhantom(false);
      setConnected(false);
      return;
    }
    // provider.connect()
    provider.on("connect", () => {
      setPhantom(provider);
      setHasPhantom(true);
      console.warn("phantom wallet connected🔥");
      setConnected(true);
    });
  }, [phantom]);

  /**
   * @description gets Phantom provider, if it exists
   */
  const getProvider = () => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana;
      if (provider.isPhantom) return provider;
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        connected,
        connectPhantomWallet,
        hasPhantom,
        signup,
        isSigedIn,
        hasUserAssociatedWithWallet,
        wallet,
        autoConnect, setAutoConnect
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
