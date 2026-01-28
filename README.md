# ETH Wallet (Hardhat + TypeScript)

A minimal Ethereum wallet smart contract built with **Solidity**, tested and deployed using **Hardhat** and **TypeScript**.  
This project demonstrates deposits, withdrawals, and access control in a clean, reproducible workflow.

---

## Features
- Deposit ETH into the wallet contract
- Withdraw ETH (restricted to the contract owner)
- Balance tracking
- Automated tests for deposits, withdrawals, and access control

---

## Tech Stack
- **Solidity 0.8.28**
- **Hardhat** (development & testing framework)
- **TypeScript**
- **Ethers.js v6**

---

## Setup

Clone the repository:
```bash
git clone https://github.com/Taniya027/eth-wallet-ui.git
cd eth-wallet-ui
```

Install dependencies:
```bash
npm install
```

Compile contracts:
```bash
npx hardhat compile
```

---

## Usage

Start a local Hardhat node:
```bash
npx hardhat node
```

Deploy the contract:
```bash
npx hardhat run scripts/deploy.ts --network localhost
```

Interact with the contract:
```bash
npx hardhat run scripts/interact.ts --network localhost
```

Expected output:
```
Balance: 0n
Balance after deposit: 1000000000000000000n
Balance after withdrawal: 500000000000000000n
```

---

## Testing

Run the test suite:
```bash
npx hardhat test
```

Sample output:
```
  Wallet
    ✔ should deploy and set the owner
    ✔ should accept deposits
    ✔ should allow owner to withdraw
    ✔ should block non-owner withdrawals

  4 passing
```

---

## 📂 Project Structure
```
contracts/Wallet.sol        # Smart contract
scripts/deploy.ts           # Deployment script
scripts/interact.ts         # Interaction script
test/Wallet.ts              # Test suite
hardhat.config.ts           # Hardhat configuration
```

---

## 📌 Notes
- This project is configured for local development with Hardhat.  
- To deploy on a public testnet (e.g., Sepolia), update `hardhat.config.ts` with RPC URL and private key.  
- All interactions are designed to use **Hardhat accounts** (no wallet pop-ups).

---

## 👩‍💻 Author
Developed by **Taniya** — Blockchain developer specializing in Solidity, smart contracts, and reproducible workflows.
```
