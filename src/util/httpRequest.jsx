import axios from "axios";

export const httpRequest = axios.create({
    baseURL: "http://localhost:3306/",
    withCredentials: true,
});

export const getRequest = async (path) => {
    const response = await httpRequest.get(path);
    return response;
};
