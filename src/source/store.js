import { applyMiddleware, createStore } from "redux";
import articlesReducer from "./reducers/articlesReducer";
import thunk from "redux-thunk";

const store = createStore(articlesReducer, applyMiddleware(thunk));

export default store;