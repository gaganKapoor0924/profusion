import React, { useState } from "react";

const Todo = () => {
  const [inputs, setInputs] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs((prev) => [...prev, input]);
    setInput("");
  };

  const handleDelete = (item) => {
    setInputs(inputs.filter((item) => item !== item));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
      {inputs.map((inp, index) => {
        return (
          <p key={inp}>
            {inp}
            <button onClick={() => handleDelete(inp)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
};

export default Todo;
