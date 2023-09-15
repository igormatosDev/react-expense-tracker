import React from 'react'

const pages = [{
    'name': 'Home',
    'url': '',
}, {
    'name': 'Expense Tracker',
    'url': 'expense-tracker/',
}, {
    'name': 'Word filter',
    'url': 'word-filter/',
}, {
    'name': 'Bar sorting',
    'url': 'bar-sorting/',
},]

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <ul className="home__list">
                {pages.map((page) => {
                    return <li key={page.url}><a href={page.url}>{page.name}</a></li>
                })}
            </ul>
        </>
    )
}

export default Home