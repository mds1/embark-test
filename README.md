# Test on Ganache Mainnet Fork

The goal is to figure out how to run Embark tests on a local ganache-cli fork of the mainnet.
This fork of the mainnet runs locally like any other Ganache blockchain.

## Getting Started

### This Works

1. Start ganache with `ganache-cli -d -p 9545`
2. Run tests with `embark test --node http://localhost:9545`

### This Doesn't Work

1. Start ganache with `ganache-cli -d -f https://mainnet.infura.io -p 9545`
2. Run tests with `embark test --node http://localhost:9545`

Returns the stack trace below:

```text
You are using http to connect to the node, as a result the gas details won't be correct. For correct gas details reporting, please use a websockets connection to your node.
Using RPC as deployment connection type is deprecated. It is recommended to use WS.
Compiling contracts
Compilation done

Error: Returned error: Returned error: invalid argument 0: json: cannot unmarshal hex string of odd length into Go value of type common.Hash
    at Object.ErrorResponse (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/web3-core-helpers/src/errors.js:29:16)
    at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/web3-core-requestmanager/src/index.js:140:36
    at XMLHttpRequest.request.onreadystatechange (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/web3-providers-http/src/index.js:96:13)
    at XMLHttpRequestEventTarget.dispatchEvent (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/xhr2-cookies/xml-http-request-event-target.ts:44:13)
    at XMLHttpRequest._setReadyState (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/xhr2-cookies/xml-http-request.ts:219:8)
    at XMLHttpRequest._onHttpResponseEnd (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/xhr2-cookies/xml-http-request.ts:345:8)
    at IncomingMessage.<anonymous> (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/xhr2-cookies/xml-http-request.ts:311:39)
    at IncomingMessage.emit (events.js:203:15)
    at endReadableNT (_stream_readable.js:1129:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
terminating due to error
Returned error: Returned error: invalid argument 0: json: cannot unmarshal hex string of odd length into Go value of type common.Hash

  1) Uncaught error outside test suite - [0 gas]

  0 passing (2ms) - [Total: 0 gas]
  1 failing

  1) Uncaught error outside test suite:
     Uncaught TypeError: Cannot read property '0' of undefined
      at Mocha.contract (test/contract_spec.js:29:25)
      at ogMochaDescribe (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-test-runner/src/index.js:240:24)
      at runDescribe (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-test-runner/src/index.js:251:19)
      at EventEmitter.callback (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-test-runner/src/test.js:127:7)
      at emit (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-test-runner/src/test.js:247:25)
      at callback (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-test-runner/src/test.js:362:16)
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:473:16
      at next (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:5329:29)
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:969:16
      at next (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-test-runner/src/test.js:320:11)
      at done (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-deployment/src/index.js:182:7)
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:473:16
      at next (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:5329:29)
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:969:16
      at callback (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-deployment/src/index.js:173:20)
      at done (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-deployment/src/index.js:115:11)
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:473:16
      at next (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:5329:29)
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:969:16
      at next (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-deployment/src/index.js:58:24)
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:473:16
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:2521:9
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:473:16
      at iterateeCallback (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:988:17)
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:969:16
      at /Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/async/dist/async.js:2518:13
      at nextEach (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/src/lib/core/plugins.js:178:9)
      at cb (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-deploy-tracker/src/index.js:71:18)
      at cb (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/embark-blockchain-connector/src/index.js:667:23)
      at Object._fireError (/Users/mds/.nvm/versions/node/v10.16.0/lib/node_modules/embark/node_modules/web3-utils/src/index.js:60:9)



 > Total number of failures: 1
 ```