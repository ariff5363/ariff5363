const axios = require(“axios”);
const bitcoin = require(“bitcoinjs-lib”);
module.exports = {
  getPrices: async () => {
    const url = “https://blockchain.info/ticker?currency=MXN";
    try {
      return await axios.get(url);
    } catch (e) {
      throw new Error(e);
    }
  }
};
