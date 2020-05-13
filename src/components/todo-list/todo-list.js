import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


const TodoList = ({ todos }) => {
    return (
        <View style={styles.container}>
            {
                todos.map((item) => {
                    return (
                    <Text>{item.text}</Text>
                    )
                })
            }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const styles = StyleSheet.create({
    container: {
    },
})

export default connect(mapStateToProps)(TodoList);