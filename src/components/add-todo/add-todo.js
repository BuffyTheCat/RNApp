import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../actions'



const AddTodo = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Write Some Text' onChangeText={(text) => this.userName = text} />
            <Button onPress={() => onSubmit(this.userName)} title="Add" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginBottom: 30,
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
        onSubmit: (text) => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);