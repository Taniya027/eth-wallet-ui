import { expect } from "chai";
import { ethers } from "hardhat";

describe("Wallet", function () {
  it("should deploy and set the owner", async function () {
    const [owner] = await ethers.getSigners();
    const Wallet = await ethers.getContractFactory("Wallet");
    const wallet = await Wallet.deploy();
    await wallet.waitForDeployment();

    expect(await wallet.owner()).to.equal(owner.address);
  });

  it("should accept deposits", async function () {
    const [owner] = await ethers.getSigners();
    const Wallet = await ethers.getContractFactory("Wallet");
    const wallet = await Wallet.deploy();
    await wallet.waitForDeployment();

    // Send 1 ETH to the wallet
    await owner.sendTransaction({
      to: await wallet.getAddress(),
      value: ethers.parseEther("1.0"),
    });

    expect(await wallet.getBalance()).to.equal(ethers.parseEther("1.0"));
  });

  it("should allow owner to withdraw", async function () {
    const [owner] = await ethers.getSigners();
    const Wallet = await ethers.getContractFactory("Wallet");
    const wallet = await Wallet.deploy();
    await wallet.waitForDeployment();

    // Deposit 1 ETH
    await owner.sendTransaction({
      to: await wallet.getAddress(),
      value: ethers.parseEther("1.0"),
    });

    // Withdraw 0.5 ETH
    await wallet.withdraw(ethers.parseEther("0.5"));

    expect(await wallet.getBalance()).to.equal(ethers.parseEther("0.5"));
  });

  it("should block non-owner withdrawals", async function () {
    const [owner, other] = await ethers.getSigners();
    const Wallet = await ethers.getContractFactory("Wallet");
    const wallet = await Wallet.deploy();
    await wallet.waitForDeployment();

    // Deposit 1 ETH
    await owner.sendTransaction({
      to: await wallet.getAddress(),
      value: ethers.parseEther("1.0"),
    });

    // Try withdrawal from non-owner
    await expect(
      wallet.connect(other).withdraw(ethers.parseEther("0.5"))
    ).to.be.revertedWith("Only owner can withdraw");
  });
});