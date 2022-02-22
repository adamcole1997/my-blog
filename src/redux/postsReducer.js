import { CREATE_EMAIL_NEW_USER, CREATE_NEW_USER, CREATE_PASSWORD_NEW_USER, FETCH_POSTS, GET_COMMENTS_SUCCESS, SEARCH_POST, SET_CURRENT_PAGE, UPLOAD_POST_SUCCESS } from "./types";

const initialState = {
    posts: [],
    fetchedPosts: [], 
    currentPage:0,
    perPage:20,
    total:300,
    searchValue:'',
    post:'', 
    comment:'',
    email: '',
    password: '',
    User:{}
}

export const postsReducer =(state=initialState,action) => {
console.log(state);
    switch (action.type) {
        case FETCH_POSTS:
            return {...state,fetchedPosts:action.payload.data}
        case SET_CURRENT_PAGE:
            return {...state,currentPage:action.payload}
        case SEARCH_POST:
            return {...state,searchValue:action.payload}
        case UPLOAD_POST_SUCCESS:
            return {...state,post:action.payload}
        case GET_COMMENTS_SUCCESS:
            return {...state,comment:action.payload}    
        case CREATE_EMAIL_NEW_USER:
            return {...state,email:action.payload}    
        case CREATE_PASSWORD_NEW_USER:
            return {...state,password:action.payload}    
        case CREATE_NEW_USER:
            return {...state,newUser:action.payload}    
        default:return state
    }
    
};
