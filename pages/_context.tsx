import { useEffect, FC, createContext, useContext, useState } from 'react';
import { ethers } from 'ethers'

export interface Context {
  account: string,
  setAccount: Function,
  isAuthenticated: boolean,
  setIsAuthenticated: Function,
  checkWalletIsConnected: Function,
	login: Function,
}

export const AppContext = createContext<Context>({} as Context);

export function useAccountContext() {
  return useContext(AppContext);
}
