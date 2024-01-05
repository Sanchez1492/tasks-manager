import React from 'react';
import './TasksError.css';

function TasksError () {
    return (
        <div className='tasks-error'>
            <div className='tasks-error--container'>
                <img className='tasks-error--img' src="https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png" alt="" />
            </div>
            <p className='tasks-error--text'>An error has occurred. Please reload the page or try again later.</p>
        </div>
    )
}

export { TasksError }