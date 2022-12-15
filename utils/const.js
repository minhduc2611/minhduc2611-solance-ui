import { clusterApiUrl, PublicKey } from "@solana/web3.js";

export const CLUSTER =
  process.env.REACT_APP_CLUSTER === "mainnet"
    ? "mainnet"
    : process.env.REACT_APP_CLUSTER === "testnet"
      ? "testnet"
      : process.env.REACT_APP_CLUSTER === "devnet"
        ? "devnet"
        : "localnet";
console.log("process.env.REACT_APP_CLUSTER", process.env.REACT_APP_CLUSTER);
console.log("CLUSTER", CLUSTER);
export const SOLANA_HOST = process.env.REACT_APP_SOLANA_API_URL
  ? process.env.REACT_APP_SOLANA_API_URL
  : CLUSTER === "mainnet"
    ? clusterApiUrl("mainnet-beta")
    : CLUSTER === "testnet"
      ? clusterApiUrl("testnet")
      : CLUSTER === "devnet"
        ? clusterApiUrl("devnet")
        : "http://localhost:8899";

export const PROGRAM_ID = new PublicKey(
  CLUSTER === 'localnet' 
  ? 'Grgf27wBA8E43gzAiMBvh6hoj7SBay24E4b636zgtJ4a' 
  : CLUSTER === 'testnet' 
  ? 'BShqBmAsHXUMnc79Z1EHtWywiic5S1FWH2Kd8i35wiwA'
  : CLUSTER === 'devnet'
        ? '593Pj7uEyxExsxUiVV55bDScRzyEM9L7d5UUjjSRUbpv'
  : ''
);
