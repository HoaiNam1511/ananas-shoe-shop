import { httpRequest } from "../util/httpRequest";

export const getProduct = async ({ sortBy, orderBy, limit }) => {
    const response = await httpRequest.get(`product?limit=${limit}`);
    return response;
};

export const getProductDetail = async ({ productId }) => {
    const response = await httpRequest.get(`product/${productId}`);
    return response;
};
