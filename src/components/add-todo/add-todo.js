import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';



class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            inputText: ''
        };
    }

    render() {
        const { onSubmit } = this.props;

        return (
            <View style={styles.container}>
                <TextInput ref={this.inputRef} style={styles.input} placeholder='Write Some Text' onChangeText={(text) => this.setState({inputText: text})} />
                <Button disabled={this.state.inputText === ''} 
                        onPress={() => {
                            onSubmit(this.state.inputText);
                            this.inputRef.current.clear();
                        }} 
                        title="Add" />
            </View>
        )
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }
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