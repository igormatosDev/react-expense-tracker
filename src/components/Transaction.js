import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li key={transaction.id} className={transaction.amount < 0 ? "minus" : (transaction.amount > 0 ? "plus" : "zero")}>
            {transaction.text}
            <span>
                {transaction.amount < 0 ? "-" : "+"} ${Math.abs(transaction.amount)}
            </span>
            <button className="delete-btn" onClick={() => { deleteTransaction(transaction.id) }}>x</button>
        </li>
    )
}
