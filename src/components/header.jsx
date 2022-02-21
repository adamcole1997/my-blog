import { Box,  Container, Flex, Input } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../redux/actions'
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch()
  // const searchValue = useSelector(state=>state.posts.searchValue)
  const [value, setValue] = useState('')

  const currentPage = useSelector((state) => state.posts.currentPage)
  const perPage = useSelector((state) => state.posts.perPage)
  const handleInput = (event) => {
    setValue(event.target.value)

    dispatch(fetchPost({ currentPage, perPage, search: event.target.value }))
  }
  return (
    <Box as="header" py={4} bg="#ed5e42">
      <Container maxW="container.lg">
        <Flex justifyContent="space-evenly" alignItems="center">
          <Box>
            <Input value={value} onChange={handleInput} type="text" />
          </Box>

          <Link to='/' className='link_navbar'>
            Posts
          </Link>
          <Link to='/' className='link_navbar'>
            Users
          </Link>
          <Link to='pages/RegistrationPage' className='link_navbar'>
            Sign up
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
