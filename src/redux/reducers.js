import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: Date.now(), text: action.payload, completed: false };
            const addedTasks = [...state.tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(addedTasks));
            return {
                ...state,
                tasks: addedTasks
            };
        case DELETE_TASK:
            const remainingTasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(remainingTasks));
            return {
                ...state,
                tasks: remainingTasks
            };
        case EDIT_TASK:
            const editedTasks = state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
            );
            localStorage.setItem('tasks', JSON.stringify(editedTasks));
            return {
                ...state,
                tasks: editedTasks
            };
        case TOGGLE_TASK:
            const toggledTasks = state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(toggledTasks));
            return {
                ...state,
                tasks: toggledTasks
            };
        default:
            return state;
    }
};

export default tasksReducer;
