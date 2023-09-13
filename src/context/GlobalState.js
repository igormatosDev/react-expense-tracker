import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
];

// initial state
const initalState = {
    transactions: dummyTransactions,
}

// create context
export const GlobalContext = createContext(initalState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    // Actions
    function deleteTransaction(id){
        dispatch({
        type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    return (
        <GlobalContext.Provider value={{
            // state
            transactions: state.transactions,

            //actions
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}