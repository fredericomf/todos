import {
    SET_TODO_TEXT, 
    ADD_TODO,
    UPDATE_TODO, 
    SET_EDITING_TODO
} from '../actions';

/**
 * NOTA_ESTUDO:
 * Não é legal passar o state null, então criamos um state novo inicial como default
 */
const INITIAL_STATE = {
    id: null,
    text: '',
    done: false
};

// Este Reducer servirá tanto para criar um novo Todo quanto para editar um existente

const editingTodoReducer = (state = { INITIAL_STATE }, action) => {

    switch (action.type) {
        case SET_TODO_TEXT:
            return {
                ...state,
                text: action.text
            }

        /**
         * NOTA_ESTUDO:
         * Colocamos o ADD_TODO para ele limpar o campo após a insersão do novo valor.
         * Lembrando que podem existir vários REDUCERS escutando ACTION. Na prática eu posso ter 
         * vários reducers atenendo à mesma ACTION com implementações diferentes, como é o caso abaixo. (Parece com o padrão Observer)
         */
        case ADD_TODO:
        case UPDATE_TODO:
            return INITIAL_STATE
        case SET_EDITING_TODO:
            return action.todo;
        default:
            return state;
    }
}

export default editingTodoReducer;