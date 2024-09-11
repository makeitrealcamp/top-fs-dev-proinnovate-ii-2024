// import { createElement } from 'react';

const element = React.createElement(
  'div',
  { className: 'container' },
  'Hello World'
);
console.log(element);

function App() {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, 'Counter App'),
    React.createElement('p', null, `Count: ${'getState().counter'}`),
    React.createElement(
      'button',
      { onClick: () => console.log('clicked') },
      'Increment'
    ),
    React.createElement(
      'ul',
      null,
      '',
      React.createElement('li', null, 'Item 1'),
      React.createElement('li', null, 'Item 2'),
      React.createElement('li', null, 'Item 3')
    )
  );
}

import { createStore } from '../../Day 1/components/store.js';

const state = {
  counter: 10,
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const { getState, dispatch, subscribe } = createStore(reducer, state);

function Counter() {
  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>Count: {getState().counter}</p>
      <button
        onClick={() =>dispatch({ type: 'INCREMENT' })}
      >
        Increment
      </button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}
subscribe(() => {
    root.render(Counter());
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Counter());