import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
      <button className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)}>
        <MdEdit></MdEdit>
      </button>
      <button className="clear-btn" aria-label="Delete button" onClick={() => handleDelete(id)}>
        <MdDelete></MdDelete>
      </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
