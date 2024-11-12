import React, { useState } from 'react';
import { Box, Button, Input, Stack, Heading, FormControl, FormLabel, Avatar, Text, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

const EditProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('photo.jpg');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, avatar, password });
    navigate('/tasks');
  };

  const handleBackToTasks = () => {
    navigate('/tasks');
  };

  const boxWidth = useBreakpointValue({ base: '90%', md: '60%', lg: '50%' });

  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      bg="#ddf7eb"
      flexDirection="column"
      paddingX={{ base: '10px', md: '20px' }}
    >
      <Box
        width={boxWidth}
        bg="#f8f8f0"
        borderRadius="8px"
        boxShadow="md"
        p={{ base: 6, md: 8 }}
        mt={6}
        mb={6}
      >
        <Box 
          bg="white"
          p={4} 
          borderRadius="8px"
          boxShadow="md"
          mb={6}
          textAlign="center"
          display="flex"
          alignItems="center"
        >
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={handleBackToTasks}
            aria-label="Back to Task Page"
            boxSize={{ base: 6, md: 8 }}
            color="blue.500"
            fontWeight="bold"
            mr={4}
          />
          <Heading 
            fontSize={{ base: '20px', md: '30px' }}
            fontWeight="bold"
            color="#333"
            textAlign="left"
            flex="1"
          >
            Edit User Profile
          </Heading>
        </Box>

        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          p={6}
        >
          <Avatar 
            name={name} 
            src={avatar} 
            size="xl" 
            mb={4} 
            mx="auto"
          />
          <Text fontSize="md" color="gray.500" mb={4} textAlign="center">
            {email}
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4} width="100%">
              <FormControl>
                <FormLabel htmlFor="avatar">Profile URL</FormLabel>
                <Input 
                  id="avatar" 
                  type="text" 
                  value={avatar} 
                  onChange={(e) => setAvatar(e.target.value)} 
                  placeholder="Enter profile image URL" 
                  width={{ base: '100%', sm: '270%', md: '300%' }}  
                  bg="white"  
                  borderColor="gray.300"  
                  _hover={{ borderColor: 'blue.400' }} 
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }} 
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input 
                  id="name" 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Enter your name" 
                  width={{ base: '100%', sm: '270%', md: '300%' }}
                  borderColor="gray.300"
                  _hover={{ borderColor: 'blue.400' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  width={{ base: '100%', sm: '270%', md: '300%' }} 
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'blue.400' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Enter your password" 
                  width={{ base: '100%', sm: '270%', md: '300%' }} 
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'blue.400' }}
                  _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px #3182ce' }}
                />
              </FormControl>

              <Box display="flex" justifyContent="center" width="100%">
                <Button 
                  type="submit" 
                  colorScheme="blue" 
                  width="100%" 
                  mx="auto"
                  display="block"
                >
                  Submit
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfilePage;
