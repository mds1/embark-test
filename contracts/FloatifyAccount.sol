pragma solidity ^0.5.10;

import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
* @title Floatify Account
* @author Matt Solomon
* @notice A contract to manage funds for an individual user
*/
contract FloatifyAccount is Ownable {
  ERC20 public cDai = ERC20(0x0A1e4D0B5c71B955c0a5993023fc48bA6E380496);

  constructor() public {

  }

} // end FloatifyAccount
