import axios from "axios";

console.log(process.env.REACT_APP_SERVER_URL);

const httpRequest = axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true,
});

export const getRequest = async (path) => {
    const response = await httpRequest.get(path);
    return response;
};
