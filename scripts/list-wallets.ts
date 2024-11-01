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

  console.log("Fetching wallet IDs...");

  const walletIds = await walletManager.getWalletIds(signer.address);
  
  console.log(`Found ${walletIds.length} wallets`);
  
  for (const walletId of walletIds) {
    const details = await walletManager.getWallet(signer.address, walletId);
    console.log("\nWallet:", walletId);
    console.log("Name:", details.name);
    console.log("Type:", getWalletTypeName(details.walletType));
    console.log("Active:", details.active);
    if (details.btcAddress) {
      console.log("BTC Address:", details.btcAddress);
    }
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