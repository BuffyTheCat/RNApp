import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'pink',
        paddingBottom: 10,
        marginBottom: 20
    },
    text: {
        color: 'black',
        fontSize: 20
    }
})

export default Navbar;