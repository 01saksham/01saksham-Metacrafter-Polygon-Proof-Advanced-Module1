const hardhat = require("hardhat");
const { FXRootContractAbi } = require("../abis");

async function main() {
  const nftAddress = "0x973bce79732fc1A61bA27a8117664C6d7398c1CF";
  const accountAddress = "0xb12F4664A25AF8b5eCe76dACCB74d2379383CB74" ;

  const tokenIds = [1, 2, 3, 4, 5];

  // Get the contract instances
  const nftCollection = await hardhat.ethers.getContractAt("AbstractArt", nftAddress);
  const fxRoot = await hardhat.ethers.getContractAt(
    FXRootContractAbi,
    "0xF9bc4a80464E48369303196645e876c8C7D972de"
  );

  for (let i = 0; i < tokenIds.length; i++) {
    const tokenId = tokenIds[i];

    // Approve the transfer of the token to fxRoot contract
    const approveTxn = await nftCollection.approve(fxRoot.address, tokenId, { gasLimit: 300000 });
    await approveTxn.wait();
    console.log(`NFT ${tokenId} approved`);

    // Deposit the token into fxRoot contract
    const depositTxn = await fxRoot.deposit(
      nftAddress,
      accountAddress,
      tokenId,
      "0x6566",
      { gasLimit: 300000 }
    );
    await depositTxn.wait();
    console.log(`NFT ${tokenId} deposited`);
  }
}

main().catch((error) => {
  console.error(`Error: ${error}`);
  process.exitCode = 1;
});
