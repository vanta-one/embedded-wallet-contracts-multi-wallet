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

  // Replace with actual wallet ID and transaction hash
  const WALLET_ID = "YOUR_WALLET_ID";
  const TX_HASH = "YOUR_TX_HASH";
  
  console.log("Signing Bitcoin transaction...");

  const signature = await walletManager.signBitcoinTransaction(
    WALLET_ID,
    TX_HASH
  );

  console.log("Signature:");
  console.log("r:", signature.r.toString());
  console.log("s:", signature.s.toString());
  console.log("v:", signature.v);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 