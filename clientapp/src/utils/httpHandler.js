import axios from "axios";
import { baseUrl } from "./constants";

const apiUrl = baseUrl;

// Get token from local storage
async function getToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? `Bearer ${user.token}` : "";
}

// Axios GET method with authorization header
const get = async (url) => {
  try {
    const token = await getToken();

    const response = await axios.get(`${apiUrl}${url}`, {
      maxRedirects: 0,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,  // Add Bearer token
      },
    });

    return response;
  } catch (error) {
    handleError(error);  // Improved error handling
  }
};

// Axios POST method with authorization header
const post = async (url, params, opt = {}) => {
  try {
    const token = await getToken();

    // Add Authorization header to the options
    opt = {
      ...opt,
      headers: {
        ...opt.headers,
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    const response = await axios.post(`${apiUrl}${url}`, params, opt);

    return response;
  } catch (error) {
    handleError(error);  // Improved error handling
  }
};

// Centralized error handling function
const handleError = (error) => {
  if (error.response) {
    // Server responded with a status code out of 2xx range
    if (error.response.status === 401) {
      // Handle unauthorized access (e.g., token expired)
      console.error("Unauthorized: Token expired or invalid.");
      // Optionally, you could log out the user or redirect to the login page
      localStorage.removeItem("user");
      window.location.href = "/login";  // Redirect to login
    } else {
      console.error("API Error:", error.response.data.message || error.message);
    }
  } else if (error.request) {
    // No response received from the server
    console.error("Network Error:", error.message);
  } else {
    // Other unknown errors
    console.error("Error:", error.message);
  }

  throw error;  // Re-throw the error to handle it in the calling function
};

// Export the HTTP methods
const http = { get, post };

export default http;
