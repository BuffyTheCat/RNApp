import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions'
import { withService } from '../hoc';




class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const { todos, loading } = this.props;

        if (loading) {
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        }

        return (
            <View style={styles.container}>
                {
                    todos.map((item, id) => {                                        
                        return (
                            <View style={styles.todo} key={id}>
                                <Text style={styles.todoText}>{item.text}</Text>
                            </View>
                        )
                    })
                }
            </View>
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
        fetchTodos: fetchTodos(storeService, dispatch)
    }
}

const styles = StyleSheet.create({
    container: {
    },
    todo: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#6b6b6b',
        borderRadius: 5,
        marginBottom: 15
    },
    todoText: {
        fontSize: 24
    }
})

export default withService()(connect(mapStateToProps, mapDispatchToProps)(TodoList));
