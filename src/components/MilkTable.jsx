import React from "react";

const MilkTable = ({ records, deleteRecord }) => {
  const calculateTotal = (field) =>
    records.reduce((total, record) => total + parseFloat(record[field] || 0), 0);

  return (
    <div className="milk-table">
      <h2>Records</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity (L)</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Month</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.quantity}</td>
              <td>{record.date}</td>
              <td>{record.time}</td>
              <td>{record.amount}</td>
              <td>{record.month}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteRecord(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{calculateTotal("quantity")}</td>
            <td></td>
            <td></td>
            <td>{calculateTotal("amount")}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MilkTable;
