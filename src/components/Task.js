import React from 'react';

function Task({ task, handleDeleteTask, category, text }) {
    function handleDelete() {
        return handleDeleteTask(task);
    }

    return (
        <div className='task'>
            <div className='label'>{category}</div>
            <div className='text'>{text}</div>
            <button onClick={handleDelete} className='delete'>
                X
            </button>
        </div>
    );
}

export default Task;
