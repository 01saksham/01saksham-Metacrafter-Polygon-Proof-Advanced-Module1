require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ['70fa2cc00eecbf8d40e173aa1997ed81f1decffd3d8f8621cfce5dfb0aacf964'],
    },
    goerli: {
      url: "https://ethereum-goerli.publicnode.com",
      accounts: ['70fa2cc00eecbf8d40e173aa1997ed81f1decffd3d8f8621cfce5dfb0aacf964'],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/demo",
      accounts: ['70fa2cc00eecbf8d40e173aa1997ed81f1decffd3d8f8621cfce5dfb0aacf964'],
       },
  },
};
