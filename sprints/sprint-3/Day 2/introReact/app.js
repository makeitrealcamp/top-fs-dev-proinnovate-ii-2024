function Button({ color, text, onClick }) {
  const [state, setState] = React.useState(0);
  return <button onClick={onClick}>{text}</button>;
}

function App() {
  const [state, setState] = React.useState(20);

  return (
    <div>
      <div className="container">
        <h1>Counter App</h1>
        <p>Count: {state}</p>

        <input />
        <Button
          color="blue"
          text="Increment"
          onClick={() => setState(state + 1)}
        />
        <Button
          color="blue"
          text="Decrement"
          onClick={() => setState(state - 1)}
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
