import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              padding="12px"
              borderRadius="4px"
              borderColor="#ccc"
              fontSize="16px"
              width="100%"
              marginBottom="16px"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              padding="12px"
              borderRadius="4px"
              borderColor="#ccc"
              fontSize="16px"
              width="100%"
              marginBottom="16px"
            />
          </FormControl>
          <Button
            type="submit"
            width="60%"
            padding="10px"
            backgroundColor="#04356a"
            color="white"
            borderRadius="4px"
            fontSize="16px"
            cursor="pointer"
            _hover={{ backgroundColor: "#86c8ee" }}
            margin="0 auto"
            display="block"
          >
            Sign In
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
