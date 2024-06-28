import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav id='active-status'>
          <ul>
            <li className='active'><NavLink to="/" >Home</NavLink></li>
            <li className='active'><NavLink to="/Add-Expense">Add Expense</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add-Expense" element={<AddExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
