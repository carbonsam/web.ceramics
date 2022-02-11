import React from 'react';
import ReactDOM from 'react-dom';
import GoalList from "../components/GoalList";
import '@picocss/pico';

const App = () => (
    <main className="container">
        <GoalList />
    </main>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
