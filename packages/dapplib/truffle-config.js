require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot custom cruise predict unit gentle light army gift'; 
let testAccounts = [
"0x344493cec8301a855eac8df2d6a4b82b24546979b4dc5b96c8d6880937222194",
"0xe4d46b90d5a26c5df7dba8dff94a134c36374cfd2c5075bc1b41204d6888b6aa",
"0x123ab342aa5e9d87131c7f4c634bf6afe6acc4fad9f2a924c7b27157fdfd894d",
"0x7fa64f7eb7cb01504e3f3418bb9e8ed737042bda4e430548ac6cff785d5cebce",
"0xcd29bd2ee6bd4abe3f2f7861a05b9c5e2634b3f0a9d484aa449763b8f50467c7",
"0x05d3997a63ea37e049bd77fbf5c10ffade7acf074705cf85b41e8b1c8184e786",
"0x243a58b506513af192de9efacc1ccfbdc5ba6ce3af8178c0aa579537a702f2cb",
"0x797ba1ce2d630fc12fae9564a673ada25cb3720219e54953a85d90130a4dfd4e",
"0x3853c60b8fb6a68b92df50f9a5892673feb251d32c58b307846f3485cce738d0",
"0x4638bca66b31e424be3afb44acfd88c7040f08d7a0c402f59e3766a07754e5c1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

