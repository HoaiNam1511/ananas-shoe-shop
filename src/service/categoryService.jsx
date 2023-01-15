import * as request from "../util/httpRequest";

export const getCategory = async () => {
    const response = await request.getRequest("category/get/");
    return response.data;
};
