const MerkleTree = require("./MerkleTree");
const niceList = require("./niceList");

const merkleTree = new MerkleTree(niceList);
console.log("merkle tree root: ", merkleTree.getRoot());
