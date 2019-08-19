pragma solidity ^0.5.10;

import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";


/**
* @title Floatify Account
* @author Matt Solomon
* @notice A contract to manage funds for an individual user. Funds, e.g. DAI, will be sent here,
*  then a transaction from an EOA will trigger the deposit into Compound in return for cDAI, etc.
*/
contract FloatifyAccount is Ownable {
    // NOTE: These are the Kovan addresses from testing with Remix
    ERC20 public dai = ERC20(0xC4375B7De8af5a38a93548eb8453a498222C4fF2);
    ERC20 public cDai = ERC20(0x0A1e4D0B5c71B955c0a5993023fc48bA6E380496);

  constructor() public {

  }

  // test function
  function getBalance() public view returns (uint) {
        return dai.balanceOf(address(this));
    }

} // end FloatifyAccount
