import React, {useState} from 'react';

const Counter = () => {
  const [state, setState] = useState(0)

  const hancldeClick = () => {
    setState((count)=> count + 1)
  }

  return (
    <div>
      <div>{state}</div>
      <button onClick={hancldeClick}>+</button>
    </div>
  );
};

export default Counter;