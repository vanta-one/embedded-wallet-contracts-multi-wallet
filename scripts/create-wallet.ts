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

  console.log("Creating new wallet...");

  const tx = await walletManager.createWallet(
    "My Bitcoin Wallet", // name
    1, // WalletType.BITCOIN
    true // isTestnet
  );

  const receipt = await tx.wait();
  
  // Get WalletCreated event
  const event = receipt?.logs.find(
    log => log.topics[0] === walletManager.interface.getEvent("WalletCreated")?.topicHash
  );

  if (event) {
    const decodedEvent = walletManager.interface.decodeEventLog(
      "WalletCreated",
      event.data,
      event.topics
    );
    console.log("Wallet created with ID:", decodedEvent.walletId);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 