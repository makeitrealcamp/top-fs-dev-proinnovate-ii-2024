import { data } from './data.js';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [state, setState] = React.useState(data);

  return (
    <div>
      <div className="container">
        <h1>Order</h1>
        {/* <CreateOrder onSubmit={setState} /> */}

        {/* {state?.length &&
          state.map((order, idx) => {
            return <Order key={order.orderId} order={order} />;
          })} */}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
