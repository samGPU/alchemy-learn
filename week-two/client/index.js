const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const serverUrl = "http://localhost:1225";

async function main() {
  readline.question("Who are you?", async (username) => {
    const merkleTree = new MerkleTree(niceList);

    const index = niceList.findIndex((n) => n === username);
    const proof = merkleTree.getProof(index);

    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      username,
      proof,
    });

    console.log({ gift });
    readline.close();
  });
}

main();
