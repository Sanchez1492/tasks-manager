import React from 'react';
import './EmptyTasks.css';

function EmptyTasks () {
    return (
        <div className='empty-tasks'>
            <div className='empty-tasks--container'>
                <img className='empty-tasks--img' src="https://cdn-icons-png.flaticon.com/512/1632/1632670.png" alt="" />
            </div>
            <p className='empty-tasks--text'>There are no pending tasks</p>
        </div>
    )
}

export { EmptyTasks }