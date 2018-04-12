import React from 'react';

const TodoList = props => (
    <ul>
    {props.tasks.map(rask => {
        return <li key={task.id} onClick={() =>props.remove(task/id)}>{task.text}>/li>   
    })}
    </ul>
);

export defaul TodoList;