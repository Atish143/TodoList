import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState({});
  const [currentList, setCurrentList] = useState("");
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const newTodos = { ...todos };
    if (!newTodos[currentList]) {
      newTodos[currentList] = [];
    }
    newTodos[currentList].push(input);
    setTodos(newTodos);
    setInput("");
  };

  const handleDelete = (index) => {
    const newTodos = { ...todos };
    newTodos[currentList].splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "50%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add yours todo list here ......"
          style={{
            height: "50px",
            margin: "50px",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            height: "50px",
            margin: "50px",
          }}
        >
          Add
        </button>
        <ul style={{marginRight:"200px"}}>
          {todos[currentList] &&
            todos[currentList].map((todo, index) => (
    
              <li key={index}>
                {todo}
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    height: "30px",
                    margin: "10px",
                    backgroundColor:"red"
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
