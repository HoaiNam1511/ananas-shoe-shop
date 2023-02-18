import axios from "axios";

export const httpRequest = axios.create({
    baseURL: "https://ananas-shoe-shop.onrender.com",
    withCredentials: true,
});

export const getRequest = async (path) => {
    const response = await httpRequest.get(path);
    return response;
};
