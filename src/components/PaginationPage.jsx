import { Box, Button } from '@chakra-ui/react'
import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../redux/actions'

const PaginationPage = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.posts.currentPage)
  const total = useSelector((state) => state.posts.total)
  const perPage = useSelector((state) => state.posts.perPage)
  const totalPages = Math.ceil(total / perPage)
  console.log(totalPages);




  return (
    <Box>
      {Array(totalPages)
        .fill(null)
        .map((_, index) => (
          <Button
            as="a"
            key={index}
            onClick={() => dispatch(setCurrentPage(index + 1))}>
            {index + 1}
          </Button>
        ))}
    </Box>
  )
}

export default PaginationPage
