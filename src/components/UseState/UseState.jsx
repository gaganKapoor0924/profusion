import React, { useState } from "react";

const UseState = () => {
  const [data, setData] = useState(0);

  const handleAdd = () => {
    setData(data + 1);
  };

  const handleDecrease = () => {
    setData(data - 1);
  };

  return (
    <div>
      <p>{data}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default UseState;
