/**
 * NOTA_ESTUDO: Esse export é chamado NAMED EXPORT
 * Quando for importar pode ser feito assim:
 * import {ADD_TODO} from './actions';
 * 
 * Não preciso colocar o nome do arquivo porque, quando você coloca
 * só o nome da pasta o JS vai procurar um arquivo chamado index.js
 */
export const ADD_TODO = 'ADD_TODO';

// NOTA_ESTUDO: Arrow function entre parentesis retorna o objeto ou o resultado da função, não retorna a função
export const addTodo = (text) => ({
    type: ADD_TODO,
    // text: text NOTA_ESTUDO: isso pode ser substituido pelo destructuring ES6
    text
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = todoId => ({
    type: TOGGLE_TODO,
    todoId
});

export const SET_TODO_TEXT = 'SET_TODO_TEXT';
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
});

export const SET_EDITING_TODO = 'SET_EDITING_TODO';
export const setEditingTodo = todo => ({
    type: SET_EDITING_TODO,
    todo
});

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = todo => ({
    type: UPDATE_TODO,
    todo
});