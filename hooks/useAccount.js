import { PROGRAM_ID, SOLANA_HOST } from "../utils/const";
import SolanceCoreProgram from "solance_core";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAuthenticationContext } from "../context/AuthenticationContextProvider";

const useAccount = () => {
  const wallet = useAuthenticationContext();
  const solanceProgram = React.useRef(
    new SolanceCoreProgram(wallet, SOLANA_HOST, PROGRAM_ID)
  ).current;

  const signup = async (name, profile) => {

  };
  const getUser = async (key) => {
   // get user from db by key
  }
  return { signup, getUser };
};

export default useAccount;
