import React from 'react';
import { Box, Avatar, Stack, Heading, Text } from '@chakra-ui/react';

const ProfileCard = ({ user }) => (
  <Box 
    p={4} 
    borderWidth={1} 
    borderRadius="md" 
    width="full" 
    textAlign="center"
    boxShadow="md" 
    bg="white"
  >
    <Stack direction="column" spacing={4} align="center">
      {/* Heading untuk Edit Profile */}
      <Heading as="h3" size="lg" mb={4}>
        Edit Profile
      </Heading>

      {/* Informasi Email */}
      <Text fontSize="md" color="gray.500" mb={4}>
        {user.email}
      </Text>

      {/* Avatar di bawah tulisan "Edit Profile" */}
      <Avatar 
        name={user.name} 
        src={user.avatar} 
        size="xl" 
        mb={4}  
      />
    </Stack>
  </Box>
);

export default ProfileCard;
