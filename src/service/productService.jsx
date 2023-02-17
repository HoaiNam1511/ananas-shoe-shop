import { httpRequest } from "../util/httpRequest";

export const getProduct = async ({ sortBy, orderBy, limit }) => {
    const response = await httpRequest.get(`product?limit=${limit}`);
    return response;
};

export const getProductDetail = async ({ productId }) => {
    const response = await httpRequest.get(`product/${productId}`);
    return response;
};

export const getProductFilter = async ({ productFilterId }) => {
    const response = await httpRequest.post("product/filter", productFilterId);
    return response;
};

export const getProductFind = async ({ search }) => {
    const response = await httpRequest.get(`product/find?search=${search}`);
    return response;
};
