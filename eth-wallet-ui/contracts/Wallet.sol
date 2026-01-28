// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Wallet {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Allow deposits directly into the contract
    receive() external payable {}

    // Withdraw funds safely using call
    function withdraw(uint amount) external {
        require(msg.sender == owner, "Only owner can withdraw");
        require(amount <= address(this).balance, "Insufficient balance");

        (bool success, ) = payable(owner).call{value: amount}("");
        require(success, "Transfer failed");
    }

    // Check the current balance
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}