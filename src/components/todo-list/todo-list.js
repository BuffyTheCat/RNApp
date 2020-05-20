import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions'
import { withService } from '../hoc';
import { todosFinished, removeTodo } from '../../actions';
import { THEME } from '../../theme';

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
                style={styles.list}
                renderItem={({ item }) => (
                    <TouchableOpacity style={item.finished ? styles.todoFinished : styles.todo}
                                      activeOpacity={0.1}
                                      onPress={() => navigation.navigate('Details',{
                                        item: item
                                      })}
                                      onLongPress={() => onRemove(item)}>
                        <Text style={item.finished ? styles.todoTextFinished : styles.todoText}>{item.text}</Text>
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
        onRemove: (item) => {
            Alert.alert(
                "Are you sure?",
                `You want to remove "${item.text}" todo`,
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { text: "Yes", onPress: () => dispatch(removeTodo(item.id))}
                ],
                { cancelable: false }
            );
        }
    }
}

const styles = StyleSheet.create({
    list: {
        overflow: 'visible',
    },
    todo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingTop: 10,
        paddingBottom: 6,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: THEME.YELLOW_COLOR,
        shadowColor: THEME.BROWN_COLOR,
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
    },
    todoFinished: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingTop: 10,
        paddingBottom: 6,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: THEME.GREEN_COLOR,
        shadowColor: THEME.BROWN_COLOR,
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
    },
    todoText: {
        fontSize: 24,
    },
    todoTextFinished: {
        textDecorationLine: 'line-through',
        fontSize: 24
    }
})

export default withService()(connect(mapStateToProps, mapDispatchToProps)(TodoList));
