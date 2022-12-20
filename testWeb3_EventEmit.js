//console.log("aaaa");

var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

(async() => {

    const address = "0xb1eEEd5dD0Fb4FacB4E88e0E1Ce77199b75208Af"; // contract address of MyContract.sol
    const abi = [
        {
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_from",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "_str1",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "_str2",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_int1",
					"type": "uint256"
				}
			],
			"name": "StringLog",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_str1",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_str2",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_int1",
					"type": "uint256"
				}
			],
			"name": "contractLog",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		}
    ];

    let contractInstance = new web3.eth.Contract(abi, address);
    // console.log(await contractInstance.methods.myUint().call()); //컨트랙트의 myUnit을 호출

    let accounts = await web3.eth.getAccounts();
    await contractInstance.methods.contractLog("real estate no.3", "trade no.3 ", 333300).send({from: accounts[0]});
    //console.log(await contractInstance.methods.myUint().call());

})()