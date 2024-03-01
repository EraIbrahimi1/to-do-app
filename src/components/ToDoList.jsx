import React, { useState, useEffect } from "react";
import TodoItem from "./ToDoItem";

function ToDoList({
  todoItems,
  onHandleDeleteItem,
  onHandleEditItem,
  handleToggleDone,
}) {
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    const sorted = [...todoItems].sort(
      (a, b) => Number(a.isDone) - Number(b.isDone)
    );
    setSortedItems(sorted);
  }, [todoItems]);

  const renderTasks = (tasks) => {
    return tasks.map((item) => (
      <TodoItem
        key={item.id}
        task={item.task}
        dueDate={item.dueDate}
        isDone={item.isDone}
        onHandleDeleteItem={() => onHandleDeleteItem(item.id)}
        onHandleEditItem={(editedTask, isDone) =>
          onHandleEditItem(item.id, editedTask, isDone)
        }
        handleToggleDone={() => handleToggleDone(item.id)}
      />
    ));
  };

  const completedTasks = sortedItems.filter((task) => task.isDone);
  const remainingTasks = sortedItems.filter((task) => !task.isDone);

  return (
    <div>
      <div>{renderTasks(remainingTasks)}</div>
      <div>{renderTasks(completedTasks)}</div>
    </div>
  );
}

export default ToDoList;
