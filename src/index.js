import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./LandingPage";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

const chains = [polygonMumbai];
// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "1aab1ed57576431ca9a7c2f3c99df164" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "1aab1ed57576431ca9a7c2f3c99df164",
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <LandingPage />
    </WagmiConfig>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Web3Modal
      projectId="1aab1ed57576431ca9a7c2f3c99df164"
      ethereumClient={ethereumClient}
    />
  </React.StrictMode>
);
