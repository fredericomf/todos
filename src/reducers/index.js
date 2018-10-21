import {combineReducers} from 'redux';

import todoListReducer from './todoListReducer';
import editingTodoReducer from './editingTodoReducer';

/**
 * NOTA_ESTUDO:
 * 
 * O combineReducers ajuda quando, como na maioria das aplicações, tenho mais de um recurso
 * que usa fonte de dados. 
 * Por exemplo:
 * {
 *      todos: [{}],
 *      users: [{}],
 *      config: {}
 * }
 */
const rootReducer = combineReducers({
    todos: todoListReducer,
    editingTodo: editingTodoReducer
});

export default rootReducer;