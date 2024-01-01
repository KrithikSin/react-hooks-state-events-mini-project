import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
    const [tasks, setTasks] = useState(TASKS);
    const [categories, setCategories] = useState(CATEGORIES);

    function handleDeleteTask(taskToDelete) {
        const filteredTasks = tasks.filter(
            (task) => task.text !== taskToDelete.text
        );
        setTasks(filteredTasks);
    }
    function filterTasks(currentCategory) {
        if (currentCategory === 'All') {
            setTasks(TASKS);
            console.log(tasks);
        } else {
            const filteredTasks = TASKS.filter(
                (task) => currentCategory === task.category
            );
            setTasks(filteredTasks);
        }
    }
    function onTaskFormSubmit(newTask) {
        setTasks([...tasks, newTask]);
    }
    return (
        <div className='App'>
            <h2>My tasks</h2>
            <CategoryFilter categories={categories} filterTasks={filterTasks} />
            <NewTaskForm
                categories={categories}
                onTaskFormSubmit={onTaskFormSubmit}
            />
            <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
        </div>
    );
}

export default App;
