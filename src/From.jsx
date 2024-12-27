
import React, { useState } from "react";

function From() {
  const [expenses, setExpenses] = useState([]); 
  const [budget, setBudget] = useState(30000);
  const [newExpense, setNewExpense] = useState({ name: "", amount: "", date: "" });

  const monthlyExpenses = Array.from({ length: 12 }, () => 0);

  expenses.forEach((expense) => {
    const month = new Date(expense.date).getMonth();
    monthlyExpenses[month] += expense.amount;
  });

  const addExpense = () => {
    const amount = parseFloat(newExpense.amount);
    if (isNaN(amount) || amount <= 0 || !newExpense.date) return;

    setExpenses([...expenses, { ...newExpense, amount }]);
    setNewExpense({ name: "", amount: "", date: "" });
  };


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="title..."
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
          style={{ width: "300px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="price..."
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          style={{ width: "300px", padding: "5px" }}
        />
        <input
          type="date"
          value={newExpense.date}
          onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
          style={{ width: "300px", padding: "5px" }}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={addExpense}
            style={{ padding: "5px 10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
          >
            ADD
          </button>
          <button
            style={{ padding: "5px 10px", backgroundColor: "#f44336", color: "white", border: "none", cursor: "pointer" }}
          >
            CLOSE
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          border: "2px solid black",
          width:"300px",
          height:"100px",
          borderRadius: "9px",
          backgroundColor:"blue",
          color:"white"
        }}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "50px",
              margin: "0 2px",
              backgroundColor: "#ddd",
              position: "relative",
            }}
          >
            {monthlyExpenses[i] > 0 && (
              <div
                style={{
                  width: "100%",
                  height: `${(monthlyExpenses[i] / budget) * 100}%`,
                  backgroundColor: "red",
                  position: "absolute",
                  bottom: 0,
                }}
              ></div>
            )}
            <span
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "10px",
              }}
            >
              {new Date(2024, i).toLocaleString("default", { month: "short" })}
            </span>
          </div>
        ))}
      </div>

      <p style={{fontSize:"20px",color:"red"}}>
      Сумма: {budget} сом
      </p>

      <ul style={{listStyle:"none",fontSize:"20px"}}>
        {expenses.map((expense, index) => (
          <li key={index}>
            {new Date(expense.date).toLocaleDateString()} - {expense.name}: {expense.amount} сом
          </li>
        ))}
      </ul>
    </div>
  );
}

export default From;
