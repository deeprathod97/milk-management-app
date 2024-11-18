import React, { useState, useEffect } from "react";
import MilkForm from "./components/MilkForm";
import MilkTable from "./components/MilkTable";
import "./components/styles.css";

const App = () => {
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("milkRecords")) || []
  );

  useEffect(() => {
    localStorage.setItem("milkRecords", JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const deleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
  };

  return (
    <div className="app-container">
      <h1>Milk Management App</h1>
      <MilkForm addRecord={addRecord} />
      <MilkTable records={records} deleteRecord={deleteRecord} />
    </div>
  );
};

export default App;
