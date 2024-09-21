// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "forge-std/Script.sol";
import {LearningToken} from "../src/LearningToken.sol";
import {Staking} from "../src/Staking.sol";
import {LearningCertificateNFT} from "../src/LearningCertificateNFT.sol";

contract DeployContracts is Script {
    function run() external {
        vm.startBroadcast();

        // Deploy the LearningToken contract
        LearningToken token = new LearningToken();
        LearningCertificateNFT certificateNFT = new LearningCertificateNFT();

        // Deploy the Staking contract with the token
        Staking staking = new Staking(token, certificateNFT);

        vm.stopBroadcast();
    }
}
