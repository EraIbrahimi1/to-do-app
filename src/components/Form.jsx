import React, { useState } from "react";
import {
  Card,
  CardContent,
  Input,
  FormControl,
  FormLabel,
  Button,
  Divider,
  Box,
} from "@mui/joy";

export default function Form({ onHandleAddTodoItem }) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "" || dueDate === "") {
      return;
    }

    const newItem = {
      task,
      dueDate,
    };

    onHandleAddTodoItem(newItem);

    setTask("");
    setDueDate("");
  };

  return (
    <Card sx={{ padding: "25px" }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel
              sx={{
                color: "#12467B",
                marginBottom: "8px",
                fontSize: "16px",
              }}
            >
              Task:
            </FormLabel>
            <Input
              color="primary"
              variant="soft"
              placeholder="Insert task here 📃"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel
              sx={{
                color: "#12467B",
                fontSize: "16px",
                marginTop: "16px",
              }}
            >
              Due:
            </FormLabel>
            <Input
              color="primary"
              variant="soft"
              type="date"
              size="lg"
              slotProps={{
                input: {
                  min: "2023-06-07",
                  max: "2060-06-14",
                },
              }}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </FormControl>

          <Divider sx={{ marginY: "16px" }} />

          <Box color="primary" textAlign="center">
            <Button type="submit" size="lg" variant="soft" color="primary">
              Add to list
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
