import axios from "axios";
import { GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS } from "../constants/articlesConstant";

const getAllArticles = () => {
    return async (dispatch) => {
        dispatch({ type: GET_ARTICLES_REQUEST });
        try {
            const res = await axios.get("https://explorer-server-8urhaxhsi-ayonjd.vercel.app/blogs");
            dispatch({ type: GET_ARTICLES_SUCCESS, payload: res.data });
        } catch (error) {
            dispatch({ type: GET_ARTICLES_FAILURE, payload: error.message });
        }
    }
}

export default getAllArticles;