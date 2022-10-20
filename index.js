const { DefenderRelaySigner, DefenderRelayProvider } = require('defender-relay-client/lib/ethers');
const ethers = require('ethers');

exports.handler = async function(event) {
  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider, { speed: 'fast' });
  const abi = ["function transfer(address _to, uint256 _value) public returns (bool success)"]
  const address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  let multiplier = 1000000
  const contract = new ethers.Contract(address, abi, signer);
  let first = await contract.transfer("0x3BB1C943d02f2D0Fe1c01ef5b98f494AE450a706", multiplier * 1750);
  let second = await contract.transfer("0x77bc3Db4DBc371a0B246E624847e6C3EBFfFaFC5", multiplier * 1750);
  let third = await contract.transfer("0x976f0f0CBB3fB38EE247463F5e574b9b1A353f8a", multiplier * 900);
}
