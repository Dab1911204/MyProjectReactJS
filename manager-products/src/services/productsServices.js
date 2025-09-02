import{get,post,patch,del} from "../utils/request"
export const getProductList = async () => {
    const result = await get("products");
    return result;
}

export const createProduct = async (product) => {
    const result = await post("products", product);
    return result;
}

export const deleteProduct = async (id) => {
    const result = await del("products", id);
    return result;
}

export const updateProduct = async (id, product) => {
    const result = await patch("products", product, id);
    return result;
}