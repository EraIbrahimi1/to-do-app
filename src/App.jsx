import React, { useState } from "react";
import { Divider } from "@mui/joy";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (newItem) => {
    const newItemWithId = { ...newItem, id: Date.now() };
    setTodoItems([...todoItems, newItemWithId]);
  };

  const handleToggleDone = (itemId) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Header style={{ marginBottom: "70px" }} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ flex: "0 0 auto", marginRight: "20px", marginLeft: "80px" }}
        >
          <Form onHandleAddTodoItem={addTodoItem} />
        </div>
        <Divider
          orientation="vertical"
          style={{ margin: "0 20px" }}
          variant="solid"
        />
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            maxWidth: "500px",
            maxHeight: "300px",
          }}
        >
          <ToDoList
            todoItems={todoItems}
            onHandleToggleDone={handleToggleDone}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
