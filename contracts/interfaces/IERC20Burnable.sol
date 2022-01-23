pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

interface IERC20Burnable is IERC20Metadata {
    function burn(uint256 amount) external;

    function burnFrom(address account, uint256) external;
}
