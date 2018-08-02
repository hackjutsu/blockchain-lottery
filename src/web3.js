import Web3 from 'web3';

// get the web3 provider from Metamask
const web3 = new Web3(window.web3.currentProvider); 

export default web3;
