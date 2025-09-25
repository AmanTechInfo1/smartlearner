// config/paypal.js
const axios = require("axios");

const PAYPAL_API_BASE = "https://www.sandbox.paypal.com";
const CLIENT_ID =
  "ATdRkhDRm0xZMlOCi5jXXhAXy1q_HBXFWcSGiYjdvIcuiDOpwCc81ozkjOsR";
const CLIENT_SECRET =
  "ENyOlhCAq28hsOnh3mbfEFFHOsNfmK8QQP6TKrW4G57pO4lgrrjyJ510RuBy";

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
