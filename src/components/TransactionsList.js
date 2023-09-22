import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, onDelete }) {
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            transaction={transaction}
            onDelete={() => onDelete(transaction.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
