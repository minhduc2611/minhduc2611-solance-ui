import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const anchor = require("@project-serum/anchor");
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
export const AuthenticationContext = createContext();
export const useAuthenticationContext = () =>
  React.useContext(AuthenticationContext);

/**
 * Check Login with Phantom wallet and User in DB
 */
export const AuthenticationContextProvider = ({ children }) => {
  const router = useRouter();
  const [hasPhantom, setHasPhantom] = useState(true);
  const [connected, setConnected] = useState(false);
  const [phantom, setPhantom] = useState();
  const [loading, setLoading] = useState(false);
  const wallet = useWallet();
  const connectPhantomWallet = () => {
    phantom.connect();
  };

  const signup = async () => {
    if (!connected) {
      alert("Connect wallet first");
      return;
    }
  };
  const isSigedIn = async () => {};
  const hasUserAssociatedWithWallet = async () => {};
  useEffect(() => {
    const provider = getProvider();
    console.log("wallet.connected", wallet.connected);
    if (!wallet.connected) {
      console.log("TO CONNECT ", wallet.connected);
    }
    if (!provider) {
      setHasPhantom(false);
      setConnected(false);
      return;
    }
    provider.on("connect", () => {
      setPhantom(provider);
      setHasPhantom(true);
      console.warn("phantom wallet connected🔥");
      setConnected(true);
    });
    // todo: too much provider.on might create memory leaks
  }, [phantom]);

  useEffect(() => {
    const provider = getProvider();

    // TODO: user go to /home, but not authen wallet
    // should navigate user to /connect-wallet
    // its tricky beause the system takes some renders to auto connect to the wallet

    if (!provider.isConnected) {
      console.log(" PROVIDER IS NOT CONNECT ?", provider.isConnected);
    } else {
      console.log(" PROVIDER IS CONNECT !", provider.isConnected);
    }
    if (provider) {
      provider.on("disconnect", () => {
        setPhantom(null);
        setHasPhantom(false);
        console.warn("phantom wallet disconnected 🥲");
        setConnected(false);
        router.push("/connect-wallet", undefined, { shallow: true });
      });
    }
    // todo: too much provider.on might create memory leaks
  }, [wallet.connected]);

  /**
   * @description gets Phantom provider, if it exists
   */
  const getProvider = () => {
    if ("solana" in window) {
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
