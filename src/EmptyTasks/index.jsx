import React from 'react';
import './EmptyTasks.css';
import emptyIcon from './empty.png'

function EmptyTasks () {
    return (
        <div className='empty-tasks'>
            <div className='empty-tasks--container'>
                <img className='empty-tasks--img' src={`${emptyIcon}`} alt="" />
            </div>
            <p className='empty-tasks--text'>There are no pending tasks</p>
        </div>
    )
}

export { EmptyTasks }