/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-ethers')
 const API_URL = "https://eth-goerli.g.alchemy.com/v2/euJOEhw2FaqtHjQljfGfxbuFACJ6gC4Z";
 const PRIVATE_KEY = "3e5f83edce7e0d8d9c110fb77350b2f5b029dcfcac409cd9f594c841b130dc19"
 
 
 module.exports = {
  solidity: "0.7.3",
   defaultNetwork: "goerli",
   networks: {
     hardhat:{},
     goerli:{
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`]
     }
   }
 };