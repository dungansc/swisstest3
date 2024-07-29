import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'
import '@nomicfoundation/hardhat-ethers'
import '@openzeppelin/hardhat-upgrades'

dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: 'swisstronik',
  solidity: '0.8.20',
  networks: {
    swisstronik: {
      url: 'https://json-rpc.testnet.swisstronik.com/',
      accounts: [`0xecf150d93119b9641a9efaf0910abbd69f5dcff296820e81390f94a855c0e0a1`],
    },
  },
}

export default config
