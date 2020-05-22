import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, Image, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions'
import { withService } from '../hoc';
import { todosFinished, removeTodo } from '../../actions';
import ListItem from '../list-item'

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
        if (!todos.length) {
            return (
                <Image source={require('../../../assets/images/no_results_found.png')}
                       style={styles.image}/>
            )
        }

        return (
            <FlatList
                data={todos}
                style={styles.list}
                renderItem={({ item }) => (
                    <ListItem item={item} 
                              navigation={navigation}
                              onFinished={onFinished}
                              onRemove={onRemove} />
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
        onRemove: (item) => dispatch(removeTodo(item.id))
    }
}

const styles = StyleSheet.create({
    list: {
        overflow: 'visible',
    },
    image: {
        width: '100%',
        resizeMode: 'contain'
    }
})

export default withService()(connect(mapStateToProps, mapDispatchToProps)(TodoList));
