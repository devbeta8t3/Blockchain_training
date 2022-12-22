// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract PriceContract {

    event StringLog(
        address _from, 
        string _contractor1, 
        string _contractor2, 
        string _contractTitle,
        string _contractContent,
        uint _contractPrice
    );

    function contractLog(string memory _contractor1, string memory _contractor2, string memory _contractTitle, string memory _contractContent, uint _contractPrice) public returns (bool) {

        emit StringLog(msg.sender, _contractor1, _contractor2, _contractTitle, _contractContent, _contractPrice);

        return true;
    }
}