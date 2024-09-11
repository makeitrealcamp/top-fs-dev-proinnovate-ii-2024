const Order = ({ order }) => {
    return (
      <div>
        <h2>Order ID: {order.orderId}</h2>
        <h3>Customer Name: {order.customerName}</h3>
        <p>Date: {order.date}</p>
        <p>Total Amount: {order.totalAmount}</p>
      </div>
    );
  };