import axios from "axios";
import { GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS } from "../constants/articlesConstant";

const getAllArticles = async (dispatch) => {
    dispatch({
        type: GET_ARTICLES_REQUEST
    });
    try {
        const res = await axios.get("https://floating-ocean-13139.herokuapp.com/blogs");
        dispatch({
            type: GET_ARTICLES_SUCCESS, payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ARTICLES_FAILURE, payload: error.message
        });
    }
}