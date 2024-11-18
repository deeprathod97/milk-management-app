import React, { useState, useEffect } from "react";
import MilkForm from "./components/MilkForm";
import MilkTable from "./components/MilkTable";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash, faCalendarAlt, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import "./components/styles.css";

// Add icons to the FontAwesome library
library.add(faPlus, faTrash, faCalendarAlt, faUser, faClock);

const App = () => {
  const [records, setRecords] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("milkRecords")) || [];
    setRecords(storedRecords);
  }, []);

  // Save data to localStorage whenever records change
  useEffect(() => {
    localStorage.setItem("milkRecords", JSON.stringify(records));
  }, [records]);

  // Function to add a record
  const addRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  // Function to delete a record
  const deleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
  };

  return (
    <div className="app">
      <header>
        <h1>Milk Management App</h1>
      </header>
      <main>
        <MilkForm addRecord={addRecord} />
        <MilkTable records={records} deleteRecord={deleteRecord} />
      </main>
    </div>
  );
};

export default App;
