import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const Wallet = await ethers.getContractFactory("Wallet");

  // Deploy the contract
  const wallet = await Wallet.deploy();

  // Wait until deployment is complete
  await wallet.waitForDeployment();

  // Print the deployed address
  console.log("Wallet deployed to:", await wallet.getAddress());
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});