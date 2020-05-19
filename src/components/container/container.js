import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = (props) => {

    return (
        <View style={styles.wrapper}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 36,
        paddingBottom: 40,
        backgroundColor: '#ffffff'
    }
})

export default Container;