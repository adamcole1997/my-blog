import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../redux/actions';
import { useParams } from "react-router-dom";
import { Box } from '@chakra-ui/react';

const CommentPage = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const comment = useSelector(state=>state.posts.comment)
  const values = Object.values(comment)
  useEffect(()=>{
    dispatch(getComments(params.postId))
  },[])
  return (
    <div> 
    {values.map(comm=><div key={Math.random()}>{comm.text}</div>)} 
    </div>
  )
}

export default CommentPage