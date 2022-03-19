require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle foot chaos remember magic million ice light army gaze'; 
let testAccounts = [
"0xc3886ee4db328c84beb8d980e9c5156be005a5a2702aadc40e2bcfcc1403706e",
"0x3160132a1ed9a758c4876a05af5f064cf29b2065e38004b5c3b3a3e84637c910",
"0xbcbd87ce1ed42197b3e834c07114d5f29b783d03a1fbe1a4922e3674dced59b6",
"0x9ce0cea782aa8dd81ab420e0f7065e71aad7a7cbea69cc9a3677f4398ff3b365",
"0x8ca3f7600cf05d55e3532b340b9ea4d3e52267d87a863474d77616ff2fdb1fd6",
"0x90f99e440c0f5e22c724ca1f7e129e7b6439da26bca4ab68e60eb62b765027c4",
"0xd2e851b6052412041afa1ce6131c97006e34ab808c0728be32a0c5d64d809581",
"0x782a4cf4392701a286af315e9ec5e46066e7c996a523fc33ef8ffd01a93e1f93",
"0x175097a5f6262d17d90e71b181c3b218c7a0ce01bae9f20d93062571bcde0988",
"0xd00dd4d70fa1202e948872cd1b168934da585b317e6c8dd557b20b169980a7fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

