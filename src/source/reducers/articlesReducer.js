import { GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS } from "../constants/articlesConstant"

const initialState = {
    isLoading: false,
    articles: [],
    error: null,
}

//Where there is need to use the all property of initialState, no need to use the ...state
const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_ARTICLES_SUCCESS:
            return {
                isLoading: false,
                articles: action.payload,
                error: null,
            }
        case GET_ARTICLES_FAILURE:
            return {
                isLoading: false,
                articles: [],
                error: action.payload,
            }
        default:
            return state;

    }

}

export default articlesReducer;