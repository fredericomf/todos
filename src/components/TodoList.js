import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TodoListItem from './TodoListItem';
import {toggleTodo, setEditingTodo} from '../actions';

import {connect} from 'react-redux';

const TodoList = ({todos, dispatchToggleTodo, dispatchSetEditingTodo}) => (
    <View>
        {
            todos.map(todo => (
                <TodoListItem 
                    key={todo.id} 
                    todo={todo} 
                    onLongPressTodo={()=> dispatchSetEditingTodo(todo)}
                    onPressTodo={() => dispatchToggleTodo(todo.id)}
                />
            ))
        }
    </View>
);

const styles = StyleSheet.create({
});

const mapStateToProps = state => {
    const {todos} = state;
    return { todos };
}

/**
 * Injeta o resultado de mapStateToProps para o componente
 * Injeta o dispatchToggleTodo
 */
export default connect(
    mapStateToProps, 
    {
        dispatchToggleTodo : toggleTodo,
        dispatchSetEditingTodo: setEditingTodo
    }
)(TodoList);