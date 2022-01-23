import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "hardhat-dependency-compiler";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "tsconfig-paths/register";

import "./tasks/accounts";
import "./tasks/deploy";

import { HardhatUserConfig } from "hardhat/config";
import { getHardhatNetworks } from "./config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  gasReporter: {
    currency: "USD",
    enabled: !!process.env.REPORT_GAS,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: getHardhatNetworks(),
  dependencyCompiler: {
    paths: [
      "@uniswap/v2-core/contracts/UniswapV2Factory.sol",
      "@uniswap/v2-core/contracts/UniswapV2Pair.sol",
      "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol",
    ],
    keep: false,
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    sources: "contracts",
    tests: "test",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          metadata: {
            // Not including the metadata hash
            // https://github.com/paulrberg/solidity-template/issues/31
            bytecodeHash: "none",
          },
          // Disable the optimizer when debugging
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          metadata: {
            // Not including the metadata hash
            // https://github.com/paulrberg/solidity-template/issues/31
          },
          // Disable the optimizer when debugging
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
    ],
  },
  typechain: {
    outDir: "./typechain",
    target: "ethers-v5",
    tsNocheck: true,
    //externalArtifacts: ["node_modules/@uniswap/*/build/!(Combined-Json).json"],
  },
};

export default config;
