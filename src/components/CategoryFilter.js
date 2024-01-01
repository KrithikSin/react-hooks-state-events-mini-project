import React, { useState } from 'react';

function CategoryFilter({ categories, filterTasks }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    function handleClick(category) {
        console.log(category);
        setSelectedCategory(category);
        filterTasks(category);
    }

    return (
        <div className='categories'>
            <h5>Category filters</h5>
            {/* render <button> elements for each category here */}
            {categories.map((category) => (
                <button
                    className={selectedCategory === category ? 'selected' : ''}
                    onClick={() => handleClick(category)}
                    key={category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;
