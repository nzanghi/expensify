import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{createdAt}</td>
  </tr>
);

export default ExpenseListItem;
