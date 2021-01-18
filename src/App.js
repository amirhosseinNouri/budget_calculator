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
  // -------State Values--------
  // all expenses, and expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // Single Expense
  const [charge, setCharge] = useState("");
  // Single Amount
  const [amount, setAmount] = useState("");
  //alert
  const [alert, setAlert] = useState({ show: false });

  // -------Functionality--------
  //handle charge
  const handleCharge = (event) => {
    setCharge(event.target.value);
  };
  //handle amount
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, text, type });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, newExpense]);
      handleAlert({ type: "success", text: "item added successfully" });
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`,
      });
    }
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}></Alert>}
      <h1>budget calculator</h1>
      <main className="app">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        ></ExpenseForm>
        <ExpenseList expenses={expenses}></ExpenseList>
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((total, current) => {
            return (total += parseInt(current.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
