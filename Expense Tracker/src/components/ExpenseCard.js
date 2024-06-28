import React from 'react';

const ExpenseCard = ({ expense }) => {
  return (
    <div className="expense-card">
      <h2 className='title'>{expense.description}</h2>
      <p><h3>{expense.transactionType}</h3> Rs {expense.amount}</p>
    </div>
  );
};

export default ExpenseCard;
