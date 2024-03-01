import { Box, Checkbox, Typography, Button } from "@mui/joy";

const TodoItem = ({
  task,
  dueDate,
  isDone,
  onHandleToggleDone,
  onHandleDeleteItem,
  handleEditClick,
}) => {
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
        color={isDone ? "success" : "primary"}
        onChange={onHandleToggleDone}
        readOnly
      />

      <Box borderRight="1px solid #ccc" height="50%" mx={1} my={0.5} />

      <Box flex={1} marginLeft={2} marginRight={2}>
        <Typography variant="plain" color={isDone ? "success" : "primary"}>
          <span style={{ textDecoration: isDone ? "line-through" : "" }}>
            {task}
          </span>
        </Typography>
        {!isDone && (
          <Typography variant="plain" color="primary">
            Due: {dueDate}
          </Typography>
        )}
      </Box>

      <Box>
        <Button
          variant="soft"
          size="sm"
          color="primary"
          onClick={handleEditClick}
        >
          🖊️
        </Button>
      </Box>

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
