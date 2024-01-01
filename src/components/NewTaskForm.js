import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('Code');

    function handleDetailsChange(e) {
        console.log(e.target.value);
        setDetails(e.target.value);
    }

    function handleCategoryChange(e) {
        console.log(e.target.value);
        setCategory(e.target.value);
    }
    function onFormSubmit(e) {
        e.preventDefault();
        let newTask = {
            text: details,
            category: category,
        };
        onTaskFormSubmit(newTask);
    }
    return (
        <form onSubmit={onFormSubmit} className='new-task-form'>
            <label>
                Details
                <input
                    type='text'
                    name='text'
                    value={details}
                    onChange={handleDetailsChange}
                />
            </label>
            <label>
                Category
                <select
                    onChange={handleCategoryChange}
                    name='category'
                    value={category}
                >
                    {categories.map((category) =>
                        category === 'All' ? null : (
                            <option key={category}>{category}</option>
                        )
                    )}
                </select>
            </label>
            <input type='submit' value='Add task' />
        </form>
    );
}

export default NewTaskForm;
