import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = () => {

    if (task.trim() === "") return;

    const updatedTasks = [...tasks, task].sort();

    setTasks(updatedTasks);

    setTask("");
  };

  // Delete task
  const deleteTask = (index) => {

    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  };

  // Add task on Enter key (bonus UX)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (

    <div style={{ padding: "30px", fontFamily: "Arial" }}>

      <h2>Todo List</h2>

      <div style={{ marginBottom: "15px" }}>

        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{ padding: "5px", width: "200px" }}
        />

        <button
          onClick={addTask}
          style={{ marginLeft: "10px", padding: "5px 10px" }}
        >
          Add
        </button>

      </div>

      <ul style={{ paddingLeft: "20px" }}>

        {tasks.map((t, index) => (

          <li key={index} style={{ marginBottom: "8px" }}>

            {t}

            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px", padding: "3px 8px" }}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>

  );
}

export default App;
