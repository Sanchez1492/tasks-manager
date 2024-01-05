import React from 'react';
import './TasksLoading.css';

function TasksLoading () {
    return (
        <div className='loading-skeleton--wrapper'>
            <div className='loading-skeleton'></div>
            <div className='loading-skeleton'></div>
            <div className='loading-skeleton'></div>
            <div className='loading-skeleton'></div>
            <div className='loading-skeleton'></div>
        </div>
        )
}

export { TasksLoading }