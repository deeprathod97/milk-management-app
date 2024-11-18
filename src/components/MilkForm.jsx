import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MilkForm = ({ addRecord }) => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    date: "",
    time: "",
    amount: "",
    month: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.quantity ||
      !formData.amount ||
      !formData.date ||
      !formData.time ||
      !formData.month
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const timeParts = formData.time.split(":");
    let hours = parseInt(timeParts[0]);
    const minutes = timeParts[1];
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    addRecord({ ...formData, time: formattedTime });
    setFormData({ name: "", quantity: "", date: "", time: "", amount: "", month: "" });
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
        type="time"
        name="time"
        value={formData.time}
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
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} /> Add Record
      </button>
    </form>
  );
};

export default MilkForm;
