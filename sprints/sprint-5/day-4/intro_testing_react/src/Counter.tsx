import { useState } from 'react';

export const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p data-testid="counter-value">{value}</p>
      <div>
        <button onClick={() => setValue((prev) => prev + 1)} role="button">
          increase
        </button>
        <button onClick={() => setValue((prev) => prev - 1)} role="button">decrease</button>
      </div>
    </div>
  );
};
