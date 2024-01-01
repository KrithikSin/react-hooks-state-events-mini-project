import React from 'react';
import Task from './Task';

function TaskList({ tasks, handleDeleteTask }) {
    return (
        <div className='tasks'>
            {tasks.map((task) => (
                <Task
                    key={task.text}
                    text={task.text}
                    category={task.category}
                    task={task}
                    handleDeleteTask={handleDeleteTask}
                />
            ))}
        </div>
    );
}

export default TaskList;
