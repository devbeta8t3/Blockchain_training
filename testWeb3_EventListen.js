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

	//contractInstance.getPastEvents("allEvents").then(console.log); // 최근거만 호출됨
	// "allEvents" 혹은 contract에서 정의한 이벤트 이름

	// contractInstance.getPastEvents("allEvents", { // 잘 작동함
	// 	fromBlock: "earliest", // or blockNumber
	// 	toBlock: "latest" // or blockNumber
	// }).then(console.log);

	// 내가 찾는 txID
	let txID = "0x86147d8a900d3d8c0a24bf0450a217955c949991898f9ab9747653021bf92d09"

	contractInstance.getPastEvents("allEvents", {
		fromBlock: "earliest", // or blockNumber
		toBlock: "latest" // or blockNumber
	}, function(error, result){
		// 콜백함수
		// console.log(result);
		for (i in result) {
			if (result[i].transactionHash == txID) {
				console.log("====================================================");
				console.log("보낸사람: " +result[i].returnValues._from);
				console.log("계약종류: " +result[i].returnValues._str1);
				console.log("계약행위: " +result[i].returnValues._str2);
				console.log("금액(천원): " +result[i].returnValues._int1);
				console.log("====================================================");
			}
		}
	});


})()