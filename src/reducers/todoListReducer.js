import {ADD_TODO, TOGGLE_TODO, UPDATE_TODO} from '../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {

    switch( action.type ){
        case ADD_TODO:
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false
            }

            /**
             * NOTA_ESTUDO:
             * "Spread Operator"
             * Essa sintaxe serve para dar JOIN em arrays:
             * var a = [1,2,3]
             * var b = [4,5,6]
             * [...a, ...b] === [1,2,3,4,5,6]
             */
            return [...state, newTodo];
        break;
        case UPDATE_TODO:
            return state.map(todo=>{
                if(todo.id === action.todo.id)
                    return action.todo;
                return todo;
            });
        case TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id === action.todoId)
                    /**
                     * NOTA_ESTUDO:
                     * Vamos usar o "Spread Operator" para copiar o novo objeto (ao invés de array como o exemplo acima)
                     * 
                     * Uma forma alternativa seria: return Object.assign({}, todo, {done: !todo.done});
                     */
                    return {
                        ...todo,
                        done: !todo.done
                    }
                return todo;
            });
        break;
        default:
            return state; // Esse reducer não sabe como tratar a action passada, bola pra frente
    }
};

export default todoListReducer;