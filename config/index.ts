import { NetworksUserConfig } from "hardhat/types";

export function getHardhatNetworks(): NetworksUserConfig {
  return {
    hardhat: {
      chainId: 1337,
    },
  };
}
