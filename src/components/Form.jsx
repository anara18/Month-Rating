import React, { useState } from "react";

function Form() {
  const [expenses, setExpenses] = useState([]); // Чыгашалар тизмеси
  const [budget, setBudget] = useState(30000); // Бюджетти коюу
  const [newExpense, setNewExpense] = useState({ name: "", amount: "", date: "" });

  // Чыгашаны кошуу функциясы
  const addExpense = () => {
    const amount = parseFloat(newExpense.amount);
    if (isNaN(amount) || amount <= 0) return;

    setExpenses([...expenses, { ...newExpense, amount }]);
    setNewExpense({ name: "", amount: "", date: "" });
  };

  // Жалпы чыгашаны эсептөө
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Шкаладагы кызыл толтурууну эсептөө
  const scalePercentage = Math.min((totalExpenses / budget) * 100, 100);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Айлык чыгаша эсептегич</h1>

      {/* Форм */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Чыгаша аты"
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Суммасы"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <input
          type="date"
          value={newExpense.date}
          onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
        />
        <button onClick={addExpense}>Кошуу</button>
      </div>

      {/* Шкала */}
      <div style={{ border: "1px solid #000", height: "30px", width: "100%", position: "relative" }}>
        <div
          style={{
            height: "100%",
            width: `${scalePercentage}%`,
            backgroundColor: "red",
          }}
        ></div>
      </div>
      <p>
        Жалпы чыгаша: {totalExpenses} / {budget} сом
      </p>

      {/* Чыгашалардын тизмеси */}
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.date} - {expense.name}: {expense.amount} сом
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
