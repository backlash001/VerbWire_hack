/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThirdwebProvider, metamaskWallet, coinbaseWallet } from "@thirdweb-dev/react";
import {Goerli,Sepolia,Polygon,Mumbai} from "@thirdweb-dev/chains";

import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThirdwebProvider 
      activeChain={Mumbai} 
      dAppMeta={{
        name: "Thirdweb Prac",
        description: "Thirdweb Prac",
        url: "https://thirdweb.dev",
        icons: ["https://thirdweb.dev/favicon.ico"],
      }}
      supportedWallets={[metamaskWallet(), coinbaseWallet()]}
      // supportedChains={[Goerli, Sepolia, Polygon]}
      >
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
    </ThirdwebProvider>
)
