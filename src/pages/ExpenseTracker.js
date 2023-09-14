import React from 'react'

import { Header } from '../components/Header'
import { Balance } from '../components/Balance'
import { IncomeExpenses } from '../components/IncomeExpenses'
import { TransactionList } from '../components/TransactionList'
import { AddTransaction } from '../components/AddTransaction'


const ExpenseTracker = () => {
    return (
        <>
            <Header title="Expense Tracker" />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </>
    )
}

export default ExpenseTracker