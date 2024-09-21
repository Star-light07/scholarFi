// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract LearningCertificateNFT is ERC721, Ownable {
    uint256 private _tokenIds;
    mapping(address => bool) public hasMinted;

    constructor()
        ERC721("LearningCertificateNFT", "LCNFT")
        Ownable(msg.sender)
    {}

    function mintCertificate(
        address user
    ) external onlyOwner returns (uint256) {
        require(!hasMinted[user], "User has already received a certificate.");
        _tokenIds++;
        _mint(user, _tokenIds);
        hasMinted[user] = true;

        return _tokenIds;
    }
}
