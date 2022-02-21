import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createEmailUser, createPasswordUser, createUserSuccess } from '../redux/actions';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const email = useSelector(state=>state.posts.data.email)
  const password = useSelector(state=>state.posts.data.password)
  console.log(email);
  const SubmitForm = (event) => {
    event.preventDefault();
    console.log(event);
    dispatch(createUserSuccess)
  }
    return (
        <FormControl onSubmit={SubmitForm}>
            <Flex direction="column" alignItems="center" justifyContent="center">
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input width='500px' id='email' type='text' value={email} onChange={(e)=>dispatch(createEmailUser(e.target.value))}/>

                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input width='500px' id='password' type='password' value={password} onChange={(e)=>dispatch(createPasswordUser(e.target.value))} />

                <Button>Submit</Button>
            </Flex>
        </FormControl>
    )
}

export default RegistrationPage