import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from '@chakra-ui/react'

const Signup: React.FC = () => {
  return (
    <Flex minH="screen" bg="gray.50" justify="center" alignItems="center" >
      <Box p={8} rounded="lg" shadow="md" bg="white">
        <Flex justifyContent="center" mb={4}>
          {/* <img src="https://i.pinimg.com/originals/5c/53/c4/5c53c45982e8e14770272e8d282f1e4f.jpg" alt="Pinterest logo" /> */}
        </Flex>
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Join Pinterest
        </Heading>
        <Text textAlign="center" mb={8}>
          Discover and save creative ideas.
        </Text>
        <FormControl mb={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" placeholder="Email" />
        </FormControl>
        <FormControl mb={8}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" placeholder="Password" />
        </FormControl>
        <Button colorScheme="red" type="submit">
          Sign Up
        </Button>
        <Flex justifyContent="center" mt={4}>
          <Text>Already have an account?</Text>
          <Link ml={2} href="/login">
            Log in
          </Link>
        </Flex>
        <Text textAlign="center" mt={8} fontSize="xs">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </Box>
    </Flex>
  )
}

export default Signup
