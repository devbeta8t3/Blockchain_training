// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract EventEmitExample {

    event StringLog(address _from, string _str1, string _str2, uint _int1);

    function contractLog(string memory _str1, string memory _str2, uint _int1) public returns (bool) {

        emit StringLog(msg.sender, _str1, _str2, _int1);

        return true;
    }
}