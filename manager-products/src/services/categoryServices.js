import{get} from "../utils/request"
export const getListCategories = async () => {
    const result = await get("categories");
    return result;
}