import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => (
    <div>
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
    </div>
);

export default App;
