import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions'
import { withService } from '../hoc';
import { todosFinished, removeTodo } from '../../actions'

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const { todos, loading, onFinished, onRemove, navigation } = this.props;

        if (loading) {
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        }

        return (
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TouchableOpacity style={item.finished ? styles.todoFinished : styles.todo}
                                      activeOpacity={0.2}
                                      onPress={() => navigation.navigate('Details',{
                                        item: item
                                      })}
                                      onLongPress={() => onRemove(item.id)}>
                        <Text style={item.finished ? styles.todoTextFinished : styles.todoText}>{item.text}{item.id}</Text>
                        <Button
                            title="finished"
                            color={item.finished ? "#ffffff" : "#000000"}
                            onPress={() => onFinished(item.id)}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={item => `item-id-${item.id}`}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchTodos: fetchTodos(storeService, dispatch),
        onFinished: (id) => dispatch(todosFinished(id)),
        onRemove: (id) => dispatch(removeTodo(id))
    }
}

const styles = StyleSheet.create({
    container: {
    },
    todo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#6b6b6b',
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: 'yellow'
    },
    todoFinished: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#6b6b6b',
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: 'green'
    },
    todoText: {
        fontSize: 24
    },
    todoTextFinished: {
        textDecorationLine: 'line-through',
        fontSize: 24
    }
})

export default withService()(connect(mapStateToProps, mapDispatchToProps)(TodoList));
