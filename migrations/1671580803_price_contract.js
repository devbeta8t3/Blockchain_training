const PriceContract = artifacts.require("PriceContract");

module.exports = function(_deployer) {
  _deployer.deploy(PriceContract);
};
