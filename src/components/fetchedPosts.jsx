import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, setCurrentPage } from '../redux/actions';
import { fetchPosts } from '../redux/sagas';
import Post from './post';


const FetchedPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state=>state.posts.fetchedPosts)
  const currentPage = useSelector(state=>state.posts.currentPage)
  const perPage = useSelector(state=>state.posts.perPage)
  useEffect(()=>{
    dispatch(fetchPost({currentPage, perPage}))
  },[currentPage])
  
  return  <SimpleGrid columns={3} spacing={50}>
  {posts.map(post => <Post post={post} key={Math.random()} />)}
  </SimpleGrid> 
};

export default FetchedPosts;

