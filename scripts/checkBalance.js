const { ethers } = require("hardhat");

async function checkBalance() {
  const nftAddress = "0xaa397f5D065A4bAD28edAAfe9EdaC9ce61d37174";
  const nftCollection = await ethers.getContractAt("AbstractArt", nftAddress);


  // Replace this address with the address you want to check the balance for
  const walletAddress = "0xb12F4664A25AF8b5eCe76dACCB74d2379383CB74";

  // Get the balance of the wallet for MyNFT tokens
  const balance = await nftCollection.balanceOf(walletAddress);
  console.log(`🎉 AbstractArt Wallet Balance: ${balance.toString()} NFT(s) 🎉`);

}

checkBalance().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
