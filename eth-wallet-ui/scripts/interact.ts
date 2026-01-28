import { ethers } from "hardhat";

async function main() {
  const walletAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const Wallet = await ethers.getContractAt("Wallet", walletAddress);

  // Check balance
  console.log("Balance:", await Wallet.getBalance());

  // Deposit (send ETH)
  const [owner] = await ethers.getSigners();
  await owner.sendTransaction({
    to: walletAddress,
    value: ethers.parseEther("1.0"),
  });

  console.log("Balance after deposit:", await Wallet.getBalance());

  // Withdraw
  await Wallet.withdraw(ethers.parseEther("0.5"));
  console.log("Balance after withdrawal:", await Wallet.getBalance());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});