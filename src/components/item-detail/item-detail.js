import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert, Modal, TextInput } from 'react-native';
import { THEME } from '../../theme';

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            inputText: '',
            modal: false
        };
    }

    render() {
        const { currentItem, navigation, onRemove, onChangeTodo } = this.props;
        return (
            <View style={styles.itemDetail}>
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
                                    <Text style={styles.textModal}>Editing todo "{currentItem.text}"</Text>
                                    <TextInput ref={this.inputRef} style={styles.input} placeholder='Write Some Text' onChangeText={(text) => this.setState({...this.state, inputText: text})} />
                                    <Button disabled={this.state.inputText === ''} 
                                            onPress={() => {
                                                onChangeTodo(this.state.inputText, currentItem.id); 
                                                this.setState({modal: false, inputText: ''});
                                            }} 
                                            title="Change todo" />
                                    <Button onPress={() => this.setState({modal: false, inputText: ''})}
                                            color="red" 
                                            title="Abort" />
                                </View>
                            </View>
                        </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemDetail: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    text: {
        width: '100%',
        fontSize: 26,
        fontFamily: 'Montserrat-Regular',
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
        justifyContent: 'space-around',
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

export default ItemDetail;