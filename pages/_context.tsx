import { useEffect, FC, createContext, useContext, useState } from "react";
import { ethers } from "ethers";

export interface Context {
  account: string;
  setAccount: Function;
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
  checkWalletIsConnected: Function;
  login: Function;
  changeNetwork: Function;
  getAllProjects: Function
  getAllProposals: Function
  getDetails: Function
  usersContributions: Function
  createProject: Function
  createProposal: Function
  voteOnProposal: Function
  getRefund: Function
  contribute: Function
}

export const AppContext = createContext<Context>({} as Context);

export function useAccountContext() {
  return useContext(AppContext);
}

export default function () {
  return <div></div>;
}
