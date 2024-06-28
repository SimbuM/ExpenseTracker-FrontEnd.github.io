import React, { useState, useEffect } from 'react';
import ExpenseCard from '../components/ExpenseCard';

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses([
      { id: 1, description: 'College Hostel Fees', amount: 50 ,transactionType : "Debit"},
      { id: 2, description: 'Electricity Bill', amount: 75,transactionType : "Debit" },
    ]);
  }, []);

  return (
    <div className="home">
      <div> 
      <h1>Expense List</h1>
      <div className="expense-list">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;
