import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ethers } from 'ethers';
import dotenv from 'dotenv';
const { ethers } = require("ethers");
dotenv.config();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);
const rpc = "https://sepolia.infura.io/v3/22fd690104d442339bb0aa9c9fb65dfe"
const provider = new ethers.providers.JsonRpcProvider(rpc);
//// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
//const provider = new ethers.providers.Web3Provider(window.ethereum)

// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()

//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
