/* global contract, it */

const FloatifyAccount = require('Embark/contracts/FloatifyAccount');

// let accounts;
// eslint-disable-next-line no-unused-vars
let helpers;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  // deployment: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
  //  ]
  // },
  contracts: {
    FloatifyAccount: {
      // args: [100],
    },
  },
}, () => {
  // Define test helpers
  // eslint-disable-next-line global-require
  helpers = require('openzeppelin-test-helpers');
});

contract('FloatifyAccount', (accounts) => {
  const owner = accounts[0];
  const user = accounts[1];
  console.log('Owner', owner);
  console.log('User', user);

  // ===============================================================================================
  //                                     ACCESS CONTROL TESTS
  // ===============================================================================================

  it('should properly set owner on deployment', async () => {
    const contractOwner = await FloatifyAccount.owner();
    assert.strictEqual(owner, contractOwner);
  });

  it('should let the owner be changed to the user', async () => {
    await FloatifyAccount.methods.transferOwnership(user).send();
    const contractOwner = await FloatifyAccount.owner();
    assert.strictEqual(user, contractOwner);
  });

  // ===============================================================================================
  //                                     FUNCTIONALITY TESTS
  // ===============================================================================================

  // it('should set constructor value', async () => {
  //   const result = await FloatifyAccount.methods.storedData().call();
  //   assert.strictEqual(parseInt(result, 10), 100);
  // });

  // it('set storage value', async () => {
  //   await FloatifyAccount.methods.set(150).send();
  //   const result = await FloatifyAccount.methods.get().call();
  //   assert.strictEqual(parseInt(result, 10), 150);
  // });

  it('should have account with balance', async () => {
    const balance = await web3.eth.getBalance(accounts[0]);
    assert.ok(parseInt(balance, 10) > 0);
  });
});
