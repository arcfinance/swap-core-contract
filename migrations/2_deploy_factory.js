const Factory = artifacts.require("ARCFactory");

module.exports = function (deployer, network, accounts) {
  return deployer.then(async () => {
      const factory = await deployer.deploy(Factory, "0x69a997D3bC72189A6c030367c7B5775Eb8682A2e");

      console.log("Factory address: ", factory.address)
  })
}
