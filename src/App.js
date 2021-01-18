
import './App.css';
import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'

function App() {
  return (
    <>
      <Alert></Alert>
      <ExpenseForm></ExpenseForm>
      <ExpenseList></ExpenseList>
    </>
  );
}

export default App;
