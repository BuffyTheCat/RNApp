import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Button, Alert } from 'react-native';
import { THEME } from '../../theme';

const ListItem = ({ item, navigation, onFinished, onRemove }) => {
    return (
        <TouchableOpacity style={item.finished ? styles.todoFinished : styles.todo}
                            activeOpacity={0.1}
                            onPress={() => navigation.navigate('Details',{
                                item: item
                            })}
                            onLongPress={() => {
                                Alert.alert(
                                    "Are you sure?",
                                    `You want to remove "${item.text}" todo`,
                                    [
                                        {
                                            text: "Cancel",
                                            style: "cancel"
                                        },
                                        { text: "Yes", onPress: () => onRemove(item)}
                                    ],
                                    { cancelable: false }
                                );
                            }}>
            <Text style={item.finished ? styles.todoTextFinished : styles.todoText}>{item.text}</Text>
            <Button
                title="finished"
                color={item.finished ? "#ffffff" : "#000000"}
                onPress={() => onFinished(item.id)}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    },
})

export default ListItem;