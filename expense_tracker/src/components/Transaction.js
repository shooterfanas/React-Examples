import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ data }) => {
  const { deleteTransactions } = useContext(GlobalContext);
  const sign = data.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={data.amount < 0 ? 'minus' : 'plus'} key={data.id}>
        {data.text}{' '}
        <span>
          {sign}${Math.abs(data.amount)}
        </span>
        <button
          onClick={() => deleteTransactions(data.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
