import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  
  // Replace with your deployed contract address
  const WALLET_MANAGER_ADDRESS = "YOUR_CONTRACT_ADDRESS";
  
  const walletManager = await ethers.getContractAt(
    "MultiWalletManager",
    WALLET_MANAGER_ADDRESS,
    signer
  );

  // Replace with actual wallet ID
  const WALLET_ID = "YOUR_WALLET_ID";
  
  console.log("Fetching wallet details...");

  const walletDetails = await walletManager.getWallet(
    signer.address,
    WALLET_ID
  );

  console.log("Wallet Details:");
  console.log("Name:", walletDetails.name);
  console.log("Type:", getWalletTypeName(walletDetails.walletType));
  console.log("Active:", walletDetails.active);
  console.log("Created At:", new Date(Number(walletDetails.createdAt) * 1000).toLocaleString());
  if (walletDetails.btcAddress) {
    console.log("BTC Address:", walletDetails.btcAddress);
  }
}

function getWalletTypeName(type: number): string {
  switch(type) {
    case 0: return "ETHEREUM";
    case 1: return "BITCOIN";
    case 2: return "CUSTOM";
    default: return "UNKNOWN";
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 