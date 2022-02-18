import { GET_COMMENTS, GET_COMMENTS_SUCCESS, REQUEST_POSTS, SEARCH_POST, SET_CURRENT_PAGE, UPLOAD_POST, UPLOAD_POST_SUCCESS } from "./types";


export function fetchPost(post) {
    return {
        type:REQUEST_POSTS,
        payload: post
    }
}
export const setCurrentPage = (number) => {
    return {
        type:SET_CURRENT_PAGE,
        payload: number
    }
}
export const searchPost = (searchValue) => {
    return {
        type:SEARCH_POST,
        payload: searchValue
    }
}
export function PostId(post) {
    return {
        type:UPLOAD_POST,
        payload: post
    }
}
export function PostIdSuccess(post) {
    return {
        type:UPLOAD_POST_SUCCESS,
        payload: post
    }
}
export const getComments = (id) => {
    return {
        type:GET_COMMENTS,
        payload: id
    }
}
export const getCommentsSuccess = (id) => {
    console.log(id);
    return {
        type:GET_COMMENTS_SUCCESS,
        payload: id
    }
}