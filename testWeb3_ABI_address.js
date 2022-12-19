//console.log("aaaa");

var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

(async() => {

    const address = "0xBf67AF361b9e312f7c96d1f5f66CFbC0Faa489ac"; // contract address of MyContract.sol
    const abi = [
    {
        "inputs": [],
        "name": "myUint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newUint",
                "type": "uint256"
            }
        ],
        "name": "setMyUint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
    ];

    let contractInstance = new web3.eth.Contract(abi, address);
    console.log(await contractInstance.methods.myUint().call()); //컨트랙트의 myUnit을 호출

    let accounts = await web3.eth.getAccounts();
    await contractInstance.methods.setMyUint(345).send({from: accounts[0]});
    console.log(await contractInstance.methods.myUint().call());

})()