const MyContract = artifacts.require("MyContract");
module.exports = function (deployer) {
  deployer.deploy(MyContract).then((instance) => {
    instance.MyEvent().on("data", (event) => {
      console.log("Event data:", event.returnValues);
    });
  });
};

// monitoring contract
const ContractKit = require('@celo/contractkit');
const kit = ContractKit.newKit('https://alfajores-forno.celo-testnet.org');
const myContractInstance = new kit.web3.eth.Contract(abi, contractAddress);
myContractInstance.events.MyEvent({filter: {sender: someAddress}})
.on('data', (event) => {
    console.log(event.returnValues);
})
.on('error', (error) => {
    console.error(error);
});

//filtering and querying event log

const myContractInstance = new web3.eth.Contract(abi, contractAddress);
myContractInstance.getPastEvents('MyEvent', {
  filter: {sender: someAddress},
  fromBlock: 0,
  toBlock: 'latest'
}, (error, events) => {
  if (error) {
    console.error(error);
  } else {
    events.forEach(event => console.log(event.returnValues));
  }
});

//monitoring event

const Web3 = require('web3');
const web3 = new Web3('https://alfajores-forno.celo-testnet.org');
const abi = [...] // ABI from the compiled smart contract
const contractAddress = '0x...'; // Deployed contract address
const sampleToken = new web3.eth.Contract(abi, contractAddress);
sampleToken.events.Transfer({fromBlock: 0})
.on('data', (event) => {
    console.log(event.returnValues);
})
.on('error', console.error);