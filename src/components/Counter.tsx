import { useState } from 'react';

interface ICounterProps {}
const Counter: React.FC<ICounterProps> = ({}) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p> Count: {count}</p>
      <div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          increment
        </button>
      </div>
    </div>
  );
};
export default Counter;
