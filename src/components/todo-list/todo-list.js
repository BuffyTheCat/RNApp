import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


const TodoList = ({ todos }) => {
    return (
        <View style={styles.container}>
            {
                todos.map((item, id) => {                                        
                    return (
                        <Text key={id}>{item.text}</Text>
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

export default connect(mapStateToProps, null)(TodoList);