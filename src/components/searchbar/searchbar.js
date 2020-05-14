import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../actions'



const SearchBar = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <Button onPress={onSubmit('66')} title="Add" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '70%',
        padding: 10,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 6,
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);