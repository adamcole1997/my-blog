import { Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const LoginPage = () => {
  return (
<FormControl>
  <Flex direction="column" alignItems="center" justifyContent="center" gap={2}>
  <FormLabel htmlFor='email'>Email address</FormLabel>
  <Input width='500px' id='email' type='email' />
  <FormLabel htmlFor='password'>Password</FormLabel>
  <Input width='500px' id='password' type='password' />
  <Button>Submit</Button>
  </Flex>  

</FormControl>
  )
}

export default LoginPage