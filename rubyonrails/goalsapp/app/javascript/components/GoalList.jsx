import React, {useEffect, useState} from 'react';
import GoalEditModal from "./GoalEditModal";

// OPPORTUNITY: Pull these values from the API instead of hard-coding
const tableColumns = [
    "Id",
    "Title",
    "Category",
    "Progress",
    "Due Date"
];

export default () => {
    const [goals, setGoals] = useState([]);

    // OPPORTUNITY: Handle API errors in a friendly way
    const loadGoals = () => fetch("api/v1/goals/index")
        .then(data => data.json())
        .then(goals => setGoals(goals));

    // OPPORTUNITY: Handle API errors in a friendly way
    const deleteGoal = (id) => {
        const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        fetch(`api/v1/goals/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            }})
            .then(() => loadGoals());
    }

    const handleGoalDelete = (e) => {
        e.preventDefault();
        deleteGoal(e.target.dataset.id);
    };

    useEffect(loadGoals, []);

    return (
        <>
            <h1>My Goals</h1>

            <figure>
                <table role="grid">
                    <thead>
                    <tr>
                        {tableColumns.map((column, i) => <th scope="col" key={i}>{column}</th>)}
                        <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                    {/* OPPORTUNITY: Show empty view when no goals are available */}
                    {goals.map(goal => (
                        <tr key={goal.id}>
                            <th scope="row">{goal.id}</th>
                            <td>{goal.title}</td>
                            <td>{goal.category}</td>
                            <td>
                                <progress value={goal.progress} max="100"/>
                            </td>
                            <td>{goal.due_date}</td>
                            <td>
                                <a href="#close" onClick={handleGoalDelete} data-id={goal.id}>
                                    &#10060;
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </figure>

            <GoalEditModal refreshGoals={loadGoals}/>
        </>
    );
};
