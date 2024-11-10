import React from 'react';
import { Box, Button, Text, Stack, IconButton } from '@chakra-ui/react';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'; // Import icons

const TaskCard = ({ task, onComplete, onDelete }) => (
  <Box p={4} borderWidth={1} borderRadius="md" width="full" mb={4}>
    <Stack direction="row" justify="space-between">
      <Text>{task}</Text>
      <Stack direction="row" spacing={2}>
        <IconButton
          icon={<CheckIcon />} // Icon for "Done"
          colorScheme="green"
          size="sm"
          onClick={onComplete}
          aria-label="Mark as done"
        />
        <IconButton
          icon={<DeleteIcon />} // Icon for "Delete"
          colorScheme="red"
          size="sm"
          onClick={onDelete}
          aria-label="Delete task"
        />
      </Stack>
    </Stack>
  </Box>
);

export default TaskCard;
