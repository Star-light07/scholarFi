// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import {LearningToken} from "./LearningToken.sol";
import {LearningCertificateNFT} from "./LearningCertificateNFT.sol";

contract Staking {
    LearningToken public rewardToken;
    LearningCertificateNFT public certificateNFT;

    mapping(address => uint256) public stakes;
    mapping(address => uint256) public rewards;

    constructor(
        LearningToken _rewardToken,
        LearningCertificateNFT _certificateNFT
    ) {
        rewardToken = _rewardToken;
        certificateNFT = _certificateNFT;
    }

    function stake(uint256 _amount) external {
        stakes[msg.sender] += _amount;
        rewardToken.transferFrom(msg.sender, address(this), _amount);
    }

    function completeLearningStage() external {
        uint256 rewardAmount = stakes[msg.sender] / 10;
        rewards[msg.sender] += rewardAmount;
        rewardToken.mint(msg.sender, rewardAmount);

        // Mint NFT certificate if not already minted
        if (!certificateNFT.hasMinted(msg.sender)) {
            certificateNFT.mintCertificate(msg.sender);
        }
    }

    function withdrawStake(uint256 _amount) external {
        require(stakes[msg.sender] >= _amount, "Not enough stake");
        stakes[msg.sender] -= _amount;
        rewardToken.transfer(msg.sender, _amount);
    }
}
