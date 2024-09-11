
const CreateOrder = ({ onSubmit }) => {
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