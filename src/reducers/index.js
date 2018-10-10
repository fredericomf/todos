import {combineReducers} from 'redux';

import todoListReducer from './todoListReducer';

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
    todos: todoListReducer
});

export default rootReducer;