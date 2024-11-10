import React, { useState } from 'react';
import { Box, Button, Input, Stack, Text, Heading, VStack, Avatar } from '@chakra-ui/react';
import TaskCard from '../components/TaskCard';
import { useNavigate } from 'react-router-dom';

const TaskPage = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    'Learn about REST APIs and CRUD operations ',
    'Learn React hooks and state management ',
    'Understand MongoDB and how to interact with it ',
  ]);
  const [completedTasks, setCompletedTasks] = useState([
    'Learn React hooks and state management ',
    'Understand MongoDB and how to interact with it ',
  ]);
  const navigate = useNavigate();

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const completeTask = (taskToComplete) => {
    setTasks(tasks.filter((t) => t !== taskToComplete));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((t) => t !== taskToDelete));
  };

  const handleEditProfile = () => navigate('/edit-profile');
  const handleSignOut = () => navigate('/');

  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="flex-start"
      alignItems="center"
      minHeight="100vh"
      bg="#ddf7eb"
      p={5}
    >
      {/* Profile Box */}
      <Box
        width={{ base: '100%', md: '250px' }}
        height={{ base: 'auto', md: '600px' }}
        mb={{ base: 4, md: 0 }}
        bg="#f8f8f0"
        p={5}
        borderRadius="8px"
        boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
      >
        <VStack spacing={4} align="center">
          <Avatar src="photo.jpg" name="Marya Hebaa" size="xl" />
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color="black"
            textAlign="center"
            letterSpacing="wider"
            lineHeight="tall"
          >
            Holla, Welcome Back{' '}
            <Text as="span" fontWeight="bold" color="black">
              Marya Hebaa
            </Text>
            !
          </Text>

          <Button onClick={handleEditProfile} colorScheme="teal" width="full">
            Edit Profile
          </Button>
          <Button onClick={handleSignOut} colorScheme="red" width="full">
            Sign Out
          </Button>
        </VStack>
      </Box>

      {/* Task Box */}
      <Box
        width={{ base: '100%', md: '80%' }}
        height={{ base: 'auto', md: '600px' }}
        mt={{ base: 4, md: 0 }}
        ml={{ base: 0, md: 6 }}
        bg="#f8f8f0"
        p={5}
        borderRadius="8px"
        boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
      >
        <VStack spacing={4} width="full">
          {/* Input Task */}
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            w="full"
            bg="white"
            p={4}
            borderRadius="8px"
          >
            <Input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add a new task"
              borderRadius="8px"
              borderColor="#ccc"
              _focus={{ borderColor: '#4a90e2' }}
              p={2}
            />
            <Button
              onClick={addTask}
              colorScheme="teal"
              borderRadius="8px"
              p={2}
              width={{ base: 'full', sm: 'auto' }}
            >
              Add Task
            </Button>
          </Stack>

          <Heading size="md" textAlign="left" width="full">
            Tasks ({tasks.length})
          </Heading>
          <Box
            w="full"
            bg="white"
            p={4}
            borderRadius="8px"
            boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
            mb={4}
          >
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <TaskCard
                  key={index}
                  task={task}
                  onComplete={() => completeTask(task)}
                  onDelete={() => deleteTask(task)}
                />
              ))
            ) : (
              <Text>No tasks to display</Text>
            )}
          </Box>

          <Heading size="md" textAlign="left" width="full">
            Completed Tasks ({completedTasks.length})
          </Heading>
          <Box
            w="full"
            bg="white"
            p={4}
            borderRadius="8px"
            boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
            mb={4}
          >
            {completedTasks.length > 0 ? (
              completedTasks.map((task, index) => (
                <Text key={index} textDecoration="line-through" fontWeight="bold" color="black">
                  {task}
                </Text>
              ))
            ) : (
              <Text>No tasks completed yet</Text>
            )}
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default TaskPage;
