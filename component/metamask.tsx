import { ethers } from "ethers";
import React, { Component } from "react";

class Metamask extends Component {

  constructor(props) {
    super(props);
  }

  checkIfWalletIsConnected = async () => {
    const { ethereum } = window
    
  }

  async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)

  }
}

export default Metamask;
