import React, { useState, useEffect } from "react";
import TodoItem from "./ToDoItem";

function ToDoList({ todoItems, onHandleToggleDone }) {
  const [sortedItems, setSortedItems] = useState([]);

  const checkedTasks = sortedItems.filter((task) => task.isDone);
  const uncheckedTasks = sortedItems.filter((task) => !task.isDone);
  useEffect(() => {
    setSortedItems([...todoItems]);
  }, [todoItems]);

  const renderTasks = (tasks) => {
    return tasks.map((item) => (
      <TodoItem
        key={item.id}
        task={item.task}
        dueDate={item.dueDate}
        isDone={item.isDone}
        onHandleToggleDone={() => onHandleToggleDone(item.id)}
      />
    ));
  };

  return (
    <div>
      <div>{renderTasks(uncheckedTasks)}</div>
      <div>{renderTasks(checkedTasks)}</div>
    </div>
  );
}

export default ToDoList;
