import './App.css';

import { GlobalProvider } from './context/GlobalState'

import GoBack from './components/GoBack';

import Home from './pages/Home';
import ExpenseTracker from './pages/ExpenseTracker';
import WordFilter from './pages/WordFilter';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <GlobalProvider>

      <BrowserRouter>
        <div className="container">
          <GoBack/>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/expense-tracker' Component={ExpenseTracker}/>
            <Route path='/word-filter' Component={WordFilter}/>
          </Routes>
        </div>

      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
