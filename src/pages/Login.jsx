import React from 'react';
import { Box, Heading, useToast, Image, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import gambar1 from '../assets/gambar1.jpg';

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleLoginSubmit = ({ email, password }) => {
    if (email === 'maryahebaaa@example.com' && password === 'password123') {
      toast({
        title: 'Login successful',
        description: 'Welcome back!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/tasks');
    } else {
      toast({
        title: 'Login failed',
        description: 'Incorrect email or password.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      bg="#ddf7eb"
      px={{ base: '10px', md: '20px' }}
    >
      {/* Box untuk Gambar dan Form Login */}
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        width="100%"
        maxW="1200px"
        bg="#fafafa"
        borderRadius="8px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        overflow="hidden"
        mr={{ base: '0', md: '20px' }}  // Menambahkan margin kanan untuk jarak antara box luar dan box form login
      >
        {/* Box untuk Gambar */}
        <Box
          width={{ base: '100%', md: '50%' }}
          height={{ base: '200px', md: '100%' }}
          overflow="hidden"
          borderRadius={{ base: '8px 8px 0 0', md: '8px 0 0 8px' }}
        >
          <Image
            src={gambar1}
            alt="Login Image"
            objectFit="cover"
            width="100%" // Membuat gambar memenuhi lebar box
            height="100%" // Membuat gambar memenuhi tinggi box
          />
        </Box>

        {/* Box untuk Form Login */}
        <Box
          width={{ base: '100%', md: '50%' }}
          p={{ base: '20px', md: '60px' }}
          bg="white"
          borderRadius={{ base: '0 0 8px 8px', md: '0 8px 8px 0' }}
          boxShadow={{ base: 'none', md: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          mr={{ base: '0', md: '20px' }} // Menambahkan margin kanan untuk jarak antara box form login dan box luar
        >
          <Heading
            textAlign="center"
            mb="20px"
            color="#333"
            fontSize="24px"
            fontWeight="bold"
          >
            <Box
              as="span"
              display="block"
              fontSize="50px"
              color="#010509"
              lineHeight="1"
              fontFamily="'Courier New', Courier, monospace"
              letterSpacing="5px"
              textTransform="uppercase"
            >
              VOCATASK
            </Box>
            <Box
              as="span"
              display="block"
              fontSize="10px"
              color="#b85e7f"
              lineHeight="0.9"
              mt="2px"
              fontFamily="'Georgia', serif"
              textTransform="lowercase"
              letterSpacing="4px"
            >
              Login into your account
            </Box>
          </Heading>
          <LoginForm onSubmit={handleLoginSubmit} />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
