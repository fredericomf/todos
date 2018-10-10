import {ADD_TODO} from '../actions';

const todoListReducer = (state = [], action) => {

    switch( action.type ){
        case ADD_TODO:
            const newTodo = {
                text: action.text
            }

            /**
             * NOTA_ESTUDO:
             * Essa sintaxe serve para dar JOIN em arrays:
             * var a = [1,2,3]
             * var b = [4,5,6]
             * [...a, ...b] === [1,2,3,4,5,6]
             */
            return [...state, newTodo];
        break;
        default:
            return state; // Esse reducer não sabe como tratar a action passada, bola pra frente
    }
};

export default todoListReducer;