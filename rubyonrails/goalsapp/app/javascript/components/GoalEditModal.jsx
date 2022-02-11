import React, {useState} from 'react';

// OPPORTUNITY: Pull these values from the API instead of hard-coding
const goalCategories = [
    "Education",
    "Well-Being",
    "Social",
    "Financial",
    "Career",
    "Family"
];

export default ({ refreshGoals }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(goalCategories[0]);
    const [progress, setProgress] = useState(0);
    const [dueDate, setDueDate] = useState("");

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const clearForm = () => {
        setTitle("");
        setCategory(goalCategories[0]);
        setProgress(0);
        setDueDate("");
    };

    // OPPORTUNITY: Handle API errors in a friendly way
    const createGoal = () => {
        const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        return fetch("api/v1/goals/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify({
                title,
                category,
                progress,
                due_date: dueDate
            })
        });
    }

    const saveForm = async (e) => {
        e.preventDefault();
        await createGoal();
        refreshGoals();
        closeModal();
        clearForm();
    }

    const cancelForm = async (e) => {
        e.preventDefault();
        closeModal();
        clearForm();
    }

    return (
        <>
            <dialog id="goal-edit-modal" open={isModalVisible}>
                <article>
                    <a href="#close"
                       aria-label="Close"
                       className="close"
                       data-target="goal-edit-modal"
                       onClick={cancelForm}>
                    </a>

                    <h3>Add Goal</h3>

                    <form>
                        <label htmlFor="goal-title">Title</label>
                        <input type="text" id="goal-title" placeholder="Title" required value={title}
                               onChange={(e) => setTitle(e.target.value)}/>

                        <label htmlFor="goal-category">Category</label>
                        <select id="goal-category" required onChange={(e) => setCategory(e.target.value)}>
                            {goalCategories.map((category, i) => <option key={i}>{category}</option>)}
                        </select>

                        <label htmlFor="goal-progress">Progress</label>
                        <input type="number" max={100} min={0} id="goal-progress" placeholder="0"
                               value={progress}
                               required onChange={(e) => setProgress(Number(e.target.value))}/>

                        <label htmlFor="goal-due-date">Due Date</label>
                        <input type="date" id="goal-due-date" required value={dueDate}
                               onChange={(e) => setDueDate(e.target.value)}/>
                    </form>

                    <footer>
                        <a href="#cancel"
                           role="button"
                           className="secondary"
                           data-target="goal-edit-modal"
                           onClick={cancelForm}>Cancel</a>
                        <a href="#confirm"
                           role="button"
                           data-target="goal-edit-modal"
                           onClick={saveForm}>Save</a>
                    </footer>
                </article>
            </dialog>

            <button data-target="goal-edit-modal" onClick={openModal}>Add Goal</button>
        </>
    );
};
