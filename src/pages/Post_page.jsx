import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { PostId } from '../redux/actions';

const Post_page = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state=>state.posts.post)
    console.log(post);
    useEffect(()=>{
      dispatch(PostId(params.postId))
    },[])
  
  return (
    <div>
    {post.title}        

    </div>
  )
}

export default Post_page