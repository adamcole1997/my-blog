import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Post from '../components/post';
import { getComments, PostId } from '../redux/actions';

const Post_page = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state=>state.posts.post)
    const comment = useSelector(state=>state.posts.comment)
    const values = Object.values(comment)
    useEffect(()=>{
      dispatch(PostId(params.postId))
      dispatch(getComments(params.postId))
    },[])
  
  return (
    <Flex alignItems="center" direction="column">
    <Post post={post}  />      
    <div>
    {values.map(comm=><Flex key={Math.random()}>{comm.text} {comm.dateCreated}</Flex>)} 
    </div>
    </Flex>
  )
}

export default Post_page