// config/paypal.js
const axios = require("axios");

const PAYPAL_API_BASE = "https://api.sandbox.paypal.com";
const CLIENT_ID =
  "AYc_2X98F4dytlVeRvPtLwPiWYndU8jDWgQg7u4FV4ByPe83gwVL9vLuoeBcDgmSBGmF_BxE5oNOOrtG";
const CLIENT_SECRET =
  "EMiRq9KV1ckeTg19qfeOjYu5bA7p44TuHuMRTZh3FVHP1RnAgKCd1l6_OfWOC2Ei0aLF3BEiKjGH8Fzq";

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${PAYPAL_API_BASE}/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error generating access token:", error.response.data);
    throw new Error("Unable to get access token from PayPal");
  }
};

module.exports = {
  getAccessToken,
  PAYPAL_API_BASE,
};
