import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1300 },
  { id: uuidv4(), charge: "car payment", amount: 1500 },
  { id: uuidv4(), charge: "credit card bill", amount: 200 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  return (
    <>
      <Alert></Alert>
      <h1>budget calculator</h1>
      <main className="app">
        <ExpenseForm></ExpenseForm>
        <ExpenseList expenses={expenses}></ExpenseList>
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((total, current) => {
            return (total += current.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
