import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {connect} from 'react-redux';
import { setTodoText, addTodo, updateTodo} from '../actions';
import Input from './Input';

export class TodoForm extends React.Component {

    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const {todo} = this.props;

        if(todo.id){
            this.props.dispatchUpdateTodo(todo);
        }else{
            const {text} = todo;
            this.props.dispatchAddTodo(text);
        }
    }

    render() {
        const { text, id } = this.props.todo;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={ id ? 'save' : 'add'}
                        onPress={() => this.onPress()} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row' // O padrão é column
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
});

// NOTA_ESTUDO: Essa implementação foi trocada pelo Shortcut
// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }

// NOTA_ESTUDO: Abaixo é um shortcut para a implementação anterior
// const mapDispatchToProps = {
//     dispatchAddTodo: addTodo
// }

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

// Currying
export default connect(
    mapStateToProps, 
    {
        dispatchSetTodoText: setTodoText,
        dispatchAddTodo: addTodo,
        dispatchUpdateTodo: updateTodo
    }
    )(TodoForm);