import axios from "axios";
import { baseUrl } from "./constants";
const apiUrl = baseUrl;
async function getToken() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        return user.token;
    }
    return "";
}

const get = async (url) => {
    try {
        let token = await getToken();

        const response = await axios.get(`${apiUrl}${url}`, {
            maxRedirects: 0,
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
        });

        if (response.status == 401) {
            localStorage.removeItem("user");
        } else {
            return response
        }
        return response;
    } catch (error) {
        throw error;
    }
};

const post = async (url, params, opt) => {
    try {
        let token = await getToken();
        if (!opt) opt = {};
        opt = {
            ...opt,
            headers: {
                ...opt.headers,
                Authorization: `${token}`,
            },
        };

        const response = await axios.post(`${apiUrl}${url}`, params, opt);
        if (response.status == 401) {
            localStorage.removeItem("user");
        } else {
            return response
        }
        return response;
    } catch (error) {
        throw error;
    }
};

const http = { get, post };

export default http;