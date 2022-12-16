// provider
var Web3 = require('web3');
// var web3 = new Web3('http://localhost:7545');

var web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));

// getAccount
web3.eth.getAccounts(console.log);

web3.eth.getAccounts().then(console.log);

web3.eth.getAccounts(function(err, accounts) {
    console.log(accounts)
});

web3.eth.getAccounts(function(err, accounts) {
    console.log("accounts: " + accounts[0])
});

(async () => {
    let accounts = await web3.eth.getAccounts();
    console.log("Accounts", accounts);
    console.log("Accounts 1: ", accounts[0]);
})();

// getBalance
web3.eth.getBalance('0xf71454d0E0fdbf8D406D968ee9FF90A3d26b8B00').then(console.log);
web3.eth.getBalance('0xf71454d0E0fdbf8D406D968ee9FF90A3d26b8B00').then(function(result){
    console.log(web3.utils.fromWei(result, 'ether') + " Ethers")
});

// sendTransaction
web3.eth.sendTransaction({
    from: `0xf71454d0E0fdbf8D406D968ee9FF90A3d26b8B00`,
    to: `0x3F0F55E1Df53930D968719C1bf7e9e68E14AB96E`,
    value: `3000000000000000000`
}).then(function(receipt){
    console.log(receipt);
});