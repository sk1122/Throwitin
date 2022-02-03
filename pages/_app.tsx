import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContext } from "./_context";
import { useEffect, useState } from "react";
import Head from "next/head";

declare global {
  interface Window {
    ethereum: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [account, setAccount] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chain, setChain] = useState(0);

  const checkWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
          setAccount(accounts[0]);
          setIsAuthenticated(true);

          console.log(accounts[0]);
        } else {
          console.log("Do not have access");
        }
      } else {
        console.log("Install Metamask");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const login = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length !== 0) {
          setAccount(accounts[0]);
          setIsAuthenticated(true);
          console.log("Found");
        } else {
          console.log("Not Found");
        }
      } else {
        console.log("Install Metamask");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeNetwork = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }],
        });
      } else {
        console.log("Ethereum not found!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Check Ethereum Network & Switch
  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      ethereum.on("chainChanged", () => {
        setChain(ethereum.networkVersion);
      });
    }
  }, []);

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  let sharedState = {
    account,
    setAccount,
    isAuthenticated,
    setIsAuthenticated,
    checkWalletIsConnected,
    login,
    chain,
    changeNetwork,
  };

  return (
    <AppContext.Provider value={sharedState}>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/clash-display"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
