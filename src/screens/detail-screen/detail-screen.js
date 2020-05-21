import React, { Component } from 'react';
import { Text, StyleSheet, View, Modal, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import Container from '../../components/container'
import { THEME } from '../../theme';
import { connect } from 'react-redux';
import { changeTodo, removeTodo } from '../../actions';

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            inputText: '',
            modal: false
        };
    }

    render() {
        const { route, navigation, stateTodos, onChangeTodo, onRemove } = this.props;
        const { item } = route.params;

        const currentItemIndex = stateTodos.findIndex(({id}) => id === item.id);
        const currentItem = stateTodos[currentItemIndex]
        
        if (currentItem) {
            return (
                <Container style={styles.wrapper}>
                    <View style={styles.cardHead}>
                        <Text style={styles.text}>{currentItem.text ? currentItem.text : ''}</Text>
                        <Text style={styles.finished}>{currentItem.finished ? 'finished' : ''}</Text>
                    </View>
                    <Button title="Change todo" 
                            onPress={() => this.setState({...this.state, modal: true})}/>
                    <Button color="red" title="Remove todo"
                            onPress={() => {
                                Alert.alert(
                                    "Are you sure?",
                                    `You want to remove "${currentItem.text}" todo`,
                                    [
                                        {
                                            text: "Cancel",
                                            style: "cancel"
                                        },
                                        { text: "Yes", onPress: async () => {                                            
                                                await onRemove(currentItem)                                            
                                                navigation.navigate('Home');
                                            }
                                        }
                                    ],
                                    { cancelable: false }
                                );
                            }}/>
                    <Modal animationType="slide"
                           visible={this.state.modal}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.text}>Editing todo "{currentItem.textModal}"</Text>
                                <TextInput ref={this.inputRef} style={styles.input} placeholder='Write Some Text' onChangeText={(text) => this.setState({...this.state, inputText: text})} />
                                <Button disabled={this.state.inputText === ''} 
                                        onPress={() => {
                                            onChangeTodo(this.state.inputText, currentItem.id); 
                                            this.setState({modal: false, inputText: ''});
                                        }} 
                                        title="Change todo" />
                            </View>
                        </View>
                    </Modal>
                </Container>
            )
        }

        return (
            <Container style={styles.wrapper}>
                <ActivityIndicator size="large" color="#0000ff" />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    text: {
        width: '100%',
        fontSize: 26,
        textAlign: 'center'
    },
    textModal: {
        width: '100%',
        fontSize: 26,
        marginBottom: 36,
        textAlign: 'center'
    },
    cardHead: {
        position: 'relative',
        padding: 20,
        flexGrow: 2,
        width: '100%',
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },
    finished: {
        position: 'absolute',
        top: 10,
        right: 15,
        color: THEME.BROWN_COLOR
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    input: {
        width: '100%',
        marginBottom: 38,
        flexGrow: 2,
        padding: 10,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 6,
    }
});


const mapStateToProps = (state) => {
    return {
        stateTodos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeTodo: (text, id) => dispatch(changeTodo(text, id)),
        onRemove: (item) => dispatch(removeTodo(item.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);


