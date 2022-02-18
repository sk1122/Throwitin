import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContext } from "./_context";
import { useEffect, useState } from "react";
import Head from "next/head";
import abi from '../interface/contract.json'
import { ethers } from "ethers";
import { Project } from "../types/project";
import { Provider, chain, defaultChains, useContract } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'


// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }

const CONTRACT_ADDRESS = '0x41C9C4e683Bf46e7fcDB06a5F0f2b29938a90Fb5'

function MyApp({ Component, pageProps }: AppProps) {
  
  const [account, setAccount] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  var provider: any, contract: any, signer: any 

  const connectContract = async () => {
    try {
      contract = useContract({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: abi
      })
    } catch(e) {
      console.log(e)
    }
  }

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

  /// Getter Functions 

  const getAllProjects = async () => {
    try {
      connectContract()
      const projects = await contract.getAllProjects()
      return projects;
    } catch(e) {
      console.log(e)
      return false
    }
  }

  const getAllProposals = async (projectId: number) => {
    try {
      connectContract()
      const proposals = await contract.getAllRequests(projectId)
      return proposals
    } catch (e) {
      console.log(e)
      return false
    }
  }

  const getDetails = async (projectId: number) => {
    try {
      connectContract()
      const details = await contract.getDetails(projectId)
      return details
    } catch (e) {
      console.log(e)
      return false
    }
  }

  const usersContributions = async (projectId: number) => {
    try {
      connectContract()
      if(account) {
        const contributions = await contract.myContributions(projectId, account)
        return contributions
      } else {
        console.log("throwitin: you are logged in")
        return false
      }
    } catch (e) {
      console.log(e)
      return false
    }
  }

  /// Setter Functions

  const createProject = async (formData: Project) => {
    try {
      connectContract()
      const project = await contract.startProject(formData.title, formData.fundRaisingDeadline, formData.goalAmount, formData.category, formData.img, formData.uri)
      await project.wait()
      return true
    } catch(e) {
      console.log(e)
      return false
    }
  }

  const createProposal = async (projectId: number, desc: string, value: number, recipient: string) => {
    try {
      connectContract()
      const proposal = await contract.createRequest(projectId, desc, value, recipient)
      await proposal.wait()
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  const voteOnProposal = async (projectId: number, proposalId: number, vote: boolean) => {
    try {
      connectContract()
      const voting = await contract.voteRequest(projectId, proposalId, vote)
      await voting.wait()
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  const getRefund = async (projectId: number) => {
    try {
      connectContract()
      const refund = await contract.getRefund(projectId)
      await refund.wait()
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

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
    changeNetwork,
  };

  const infuraId = process.env.INFURA_ID

  // Chains for connectors to support
  const chains = [chain.polygonMainnet, chain.polygonTestnetMumbai]
  
  const connectors = ({ chainId }: any) => {
    const rpcUrl = chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ?? chain.mainnet.rpcUrls[0]
    return [
      new InjectedConnector({
        chains,
        options: { shimDisconnect: true },
      }),
      new WalletConnectConnector({
        options: {
          infuraId,
          qrcode: true,
        },
      }),
      new WalletLinkConnector({
        options: {
          appName: 'My wagmi app',
          jsonRpcUrl: `${rpcUrl}/${infuraId}`,
        },
      }),
    ]
  }

  return (
    <AppContext.Provider value={sharedState}>
      <Provider autoConnect connectors={connectors}>
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
      </Provider>
    </AppContext.Provider>
  );
}

export default MyApp;
