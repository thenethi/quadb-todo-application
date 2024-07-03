import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(null);
    const [editedTask, setEditedTask] = useState('');

    const handleEdit = (task) => {
        setEditMode(task.id);
        setEditedTask(task.text);
    };

    const handleSave = (id) => {
        dispatch(editTask(id, editedTask));
        setEditMode(null);
    };

    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    
                    {editMode === task.id ? (
                        <>
                        
                            <input
                                type="text"
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                            />
                            <button className="edit" onClick={() => handleSave(task.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <div>
                            <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggle(task.id)}
                    />
                            <span onClick={() => handleToggle(task.id)}>{task.text}</span>
                            </div>
                            <div>
                            <button className="edit" onClick={() => handleEdit(task)}>Edit</button>
                            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
