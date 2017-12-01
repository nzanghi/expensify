import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, note, dispatch }) => (
  <tr>
    <td>
      <Link to={`/edit/${id}`}>{description}</Link>
    </td>
    <td>{amount}</td>
    <td>{note}</td>
    <td>{createdAt}</td>
    <td>
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </td>
  </tr>
);

export default connect()(ExpenseListItem);
