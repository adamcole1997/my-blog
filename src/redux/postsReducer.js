import { FETCH_POSTS, SEARCH_POST, SET_CURRENT_PAGE, UPLOAD_POST_SUCCESS } from "./types";

const initialState = {
    posts: [],
    fetchedPosts: [], 
    currentPage:0,
    perPage:20,
    total:300,
    searchValue:'',
    post:'', 
}

export const postsReducer =(state=initialState,action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state,fetchedPosts:action.payload.data}
        case SET_CURRENT_PAGE:
            return {...state,currentPage:action.payload}
        case SEARCH_POST:
            return {...state,searchValue:action.payload}
        case UPLOAD_POST_SUCCESS:
            return {...state,post:action.payload}
        default:return state
    }
    
};
