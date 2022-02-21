
import {takeEvery, put, call} from 'redux-saga/effects'
import {CREATE_NEW_USER, CREATE_NEW_USER_SUCCESS, FETCH_POSTS,GET_COMMENTS,GET_COMMENTS_SUCCESS,REQUEST_POSTS, UPLOAD_POST, UPLOAD_POST_SUCCESS} from './types'

// Загрузка постов


export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}
export function* sagaWorker(action) {
  try {
    const payload = yield call(fetchPosts, action.payload)
    yield put({ type: FETCH_POSTS, payload,})
  } catch (e) {
    yield put('Что-то пошло не так')
  }
}
async function fetchPosts({ perPage, currentPage, search }) {
  const response = await fetch(`http://test-blog-api.ficuslife.com/api/v1/posts?limit=${perPage}&skip=${currentPage}${search ? `&search=${search}` : "" }`)
  return await response.json()

}


// Загрузка определенного поста по id



export function* sagaWatcherId() {
  yield takeEvery(UPLOAD_POST, sagaWorkerPost)
}
export function* sagaWorkerPost(action) {
  console.log(action);
  try {
    const payload = yield call(Post, action.payload)
    yield put({ type: UPLOAD_POST_SUCCESS, payload,})
  } catch (e) {
    yield put('Что-то пошло не так')
  }
}
export async function Post(id) {
  const response = await fetch(`http://test-blog-api.ficuslife.com/api/v1/posts/${id}`)
  return await response.json()
}



// Загрузка коммента к нужному посту


export function* sagaWatcherComments() {
  yield takeEvery(GET_COMMENTS, sagaWorkerComments)
  }
export function* sagaWorkerComments(action) {
  console.log(action);
  try {
    const payload = yield call(Comments, action.payload)
    yield put({ type: GET_COMMENTS_SUCCESS, payload,})
  } catch (e) {
    yield put('Что-то пошло не так')
  }
}
export async function Comments(id) {
  const response = await fetch(`http://test-blog-api.ficuslife.com/api/v1/comments/post/${id}`)
  console.log(response);
  return await response.json()
}



// Регистрация пользователя


export function* sagaWatcherNewUser() {
  yield takeEvery(CREATE_NEW_USER_SUCCESS, sagaWorker)
}
export function* sagaWorkerNewUser(action) {
  try {
    const payload = yield call(CreateNewUser, action.payload)
    yield put({ type: CREATE_NEW_USER, payload,})
  } catch (e) {
    yield alert('Что-то пошло не так')
  }
}
async function CreateNewUser({data}) {
  const response = await fetch('http://test-blog-api.ficuslife.com/api/v1/users')
  return await response.json()
}