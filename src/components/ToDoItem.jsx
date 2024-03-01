import React, { useState } from "react";
import { Box, Checkbox, Typography, Button, Input } from "@mui/joy";

const TodoItem = ({
  task,
  dueDate,
  isDone,
  onHandleDeleteItem,
  onHandleEditItem,
  handleToggleDone,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onHandleEditItem(editedTask, isDone);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTask(task);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      borderBottom="1px solid #ccc"
      py={1}
      px={2}
    >
      <Checkbox
        checked={isDone}
        onChange={handleToggleDone}
        color={isDone ? "success" : "primary"}
      />

      <Box borderRight="1px solid #ccc" height="50%" mx={1} my={0.5} />

      <Box flex={1} marginLeft={2} marginRight={2}>
        {isEditing ? (
          <Input
            color="primary"
            variant="soft"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          <Typography variant="plain" color={isDone ? "success" : "primary"}>
            <span style={{ textDecoration: isDone ? "line-through" : "" }}>
              {task}
            </span>
          </Typography>
        )}
        {!isDone && !isEditing && (
          <Typography variant="plain" color="primary">
            Due: {dueDate}
          </Typography>
        )}
      </Box>

      {isEditing ? (
        <Box marginLeft={2} display="flex">
          <Box marginRight={1}>
            <Button
              variant="soft"
              size="sm"
              color="primary"
              onClick={handleSaveEdit}
              style={{ marginLeft: "5px" }}
            >
              Save
            </Button>
          </Box>
          <Box>
            <Button
              variant="soft"
              size="sm"
              color="primary"
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      ) : (
        <Button
          variant="soft"
          size="sm"
          color="primary"
          onClick={handleEditClick}
        >
          🖊️
        </Button>
      )}
      <Box marginLeft={2}>
        <Button
          variant="soft"
          size="sm"
          color="primary"
          onClick={onHandleDeleteItem}
        >
          🗑️
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
