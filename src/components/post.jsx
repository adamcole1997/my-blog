import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const Post = ({post}) => {
    return <Box   width='fit-content' ml={10}>
      <Link to={`pages/${post._id}`}>
      <Heading  isTruncated maxWidth='303px' align='center' mb={5} mt={5}>{post.title} </Heading>
      <Image  className='perevorot' src={require('../kosmos.jpeg')} htmlWidth={400}  />
      <Text maxWidth='303px' align="center" mt={5}>{post.description}</Text>
      <Text mt={5}>{post.dateCreated}</Text>
      </Link>
      <Box ><Link   to={`comments/CommentPage/${post._id}`}>Комментарии</Link></Box>
      </Box> ;
};

export default Post;
