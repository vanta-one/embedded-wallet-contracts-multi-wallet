import { ethers, upgrades } from "hardhat";

async function main() {
  console.log("Deploying MultiWalletManager...");

  const MultiWalletManager = await ethers.getContractFactory("MultiWalletManager");
  
  const walletManager = await upgrades.deployProxy(
    MultiWalletManager,
    [], // No constructor arguments needed
    {
      kind: 'uups',
      initializer: 'initialize'
    }
  );

  await walletManager.waitForDeployment();
  const address = await walletManager.getAddress();

  console.log("MultiWalletManager deployed to:", address);
  
  // Verify the implementation contract
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(address);
  console.log("Implementation contract address:", implementationAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 