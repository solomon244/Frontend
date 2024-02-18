import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  const decreaseNum = () => {
    setNum(num - 1);
  };

  const numStatus = () => {
    if (num === 0) {
      return `${num} is neutral number`;
    } else if (num > 0) {
      return `${num} is positive number`;
    } else {
      return `${num} is negative number`;
    }
  };

  return (
    <div>
      <div>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
      </div>
      <h2>{numStatus()}</h2>
    </div>
  );
}

export default App;