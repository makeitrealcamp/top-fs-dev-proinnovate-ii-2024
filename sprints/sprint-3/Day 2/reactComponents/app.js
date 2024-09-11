import { data } from './data.js';
// import { Order } from './Order.js';

function Title({ text }) {
  return <h1>{text}</h1>;
}

//  const Order = ({ order }) => {
//   return (
//     <div>
//       <h2>Order ID: {order.orderId}</h2>
//       <h3>Customer Name: {order.customerName}</h3>
//       <p>Date: {order.date}</p>
//       <p>Total Amount: {order.totalAmount}</p>
//     </div>
//   );
// };


const CreateOrder = ({ onSubmit }) => {
  /*
  const [customerName, setCustomerName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [totalAmount, setTotalAmount] = React.useState('');

  const [orders, setOrders] = React.useState({
    name: '',
    date: '',
    amount: '',
  });
    const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setOrders({ ...orders, [name]: value });
  };*/
  // console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();

    const [name, date, amount] = e.target.elements;
    onSubmit((value) => [
      ...value,
      {
        orderId: value.length + 1,
        customerName: name.value,
        date: date.value,
        totalAmount: amount.value,
      },
    ]);

    // onSubmit([
    //   ...state,
    //   {
    //     orderId: state.length + 1,
    //     customerName: name.value,
    //     date: date.value,
    //     totalAmount: amount.value,
    //   },
    // ]);

    name.value = '';
    date.value = '';
    amount.value = '';
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create Order</h2>
      <input
        name="name"
        type="text"
        placeholder="Customer Name"
        // value={orders.name}
        // onChange={handleChange}
      />
      <input
        // value={orders.date}
        // onChange={handleChange}
        name="date"
        type="date"
      />
      <input
        // value={orders.amount}
        // onChange={handleChange}
        name="amount"
        type="number"
        placeholder="Total Amount"
      />
      <button type="submit">Create</button>
    </form>
  );
};

function App() {
  const [state, setState] = React.useState(data);

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
