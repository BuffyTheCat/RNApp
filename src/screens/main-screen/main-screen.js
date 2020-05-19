import React, { Fragment } from 'react';
import AddTodo from '../../components/add-todo';
import TodoList from '../../components/todo-list';
import Container from '../../components/container'

const MainScreen = ({ navigation }) => {
    return (
        <Container>
            <AddTodo />
            <TodoList navigation={navigation} />
        </Container>
    )
}

export default MainScreen;