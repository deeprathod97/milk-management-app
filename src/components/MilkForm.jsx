import React, { useState } from "react";

const MilkForm = ({ addRecord }) => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    date: "",
    amount: "",
    month: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.quantity || !formData.amount || !formData.date || !formData.month) {
      alert("Please fill in all fields.");
      return;
    }
    addRecord(formData);
    setFormData({ name: "", quantity: "", date: "", amount: "", month: "" });
  };

  return (
    <form className="milk-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Customer Name"
        required
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Milk Quantity (L)"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="month"
        value={formData.month}
        onChange={handleChange}
        placeholder="Month (e.g., Nov)"
        required
      />
      <button type="submit">Add Record</button>
    </form>
  );
};

export default MilkForm;
