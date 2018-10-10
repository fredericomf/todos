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
})