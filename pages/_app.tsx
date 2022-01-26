import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContext } from './_context'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    ethereum: any
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [account, setAccount] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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
          console.log('Found')
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

  useEffect(() => {
    checkWalletIsConnected()
  }, [])

  let sharedState = {
    account,
    setAccount,
    isAuthenticated,
    setIsAuthenticated,
    checkWalletIsConnected,
    login
  }
  
  return (
    <AppContext.Provider value={sharedState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
