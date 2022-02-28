import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppContext } from "./_context";
import { useEffect, useState } from "react";
import Head from "next/head";
import abi from '../interface/contract.json'
import { ethers } from "ethers";
import { Project } from "../types/project";
import { Provider, chain, defaultChains, useContract } from 'wagmi'
import { ExternalProvider } from '@ethersproject/providers'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import { Toaster } from "react-hot-toast";

// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }

const CONTRACT_ADDRESS = '0x0B4D84772fb2ed57527c9Fe2799fa32ac7B28845'

function MyApp({ Component, pageProps }: AppProps) {
  
  const [account, setAccount] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  var provider: any, contract: any, signer: any 

  const connectContract = async () => {
    try {
      provider = new ethers.providers.Web3Provider(window.ethereum as ExternalProvider)
      signer = provider.getSigner()
      contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)
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

  const contribute = async (projectId: number, amount: number) => {
    try {
      let value = ethers.utils.parseUnits(amount.toString(), 6)
      console.log(value)
      connectContract()
      let erc20abi = ["function approve(address _spender, uint256 _value) public returns (bool success)"]
      let erc20contract = new ethers.Contract('0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e', erc20abi, signer)
      let tx = await erc20contract.approve(CONTRACT_ADDRESS, value)
      await tx.wait()
      console.log(projectId, value)
      const contribution = await contract.contribute(projectId, value);
      await contribution.wait()
      console.log(contribution)
      return true
    } catch(e) {
      throw e
      return false
    }
  }

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
      throw e
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
    getAllProjects,
    getAllProposals,
    getDetails,
    usersContributions,
    createProject,
    createProposal,
    voteOnProposal,
    contribute,
    getRefund
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
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: '',
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
         />
        <Component {...pageProps} />
      </Provider>
    </AppContext.Provider>
  );
}

export default MyApp;
