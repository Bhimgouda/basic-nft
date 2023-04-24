const { ethers, getNamedAccounts } = require("hardhat")

const mintNft = async () => {
    const { deployer } = await getNamedAccounts()
    const basicNft = await ethers.getContract("BasicNFT", deployer)

    console.log("Minting NFT ...")

    const tx = await basicNft.mintNft()
    await tx.wait(1)
    console.log("Minted NFT ...")
}

mintNft()
