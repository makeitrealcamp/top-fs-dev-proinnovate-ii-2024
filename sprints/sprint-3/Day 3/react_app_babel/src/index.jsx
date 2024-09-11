import React from 'react';
import ReactDOM from 'react-dom';

import { CreateOrder } from './CreateOrder';
import { Order } from './Order';
function App() {
  const [state, setState] = React.useState([]);

  return (
    <div>
      <div className="container">
        <h1>Order</h1>
        <CreateOrder onSubmit={setState} />

        {state?.length &&
          state.map((order, idx) => {
            return <Order key={order.orderId} order={order} />;
          })}
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
