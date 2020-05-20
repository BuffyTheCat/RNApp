import React from 'react';
import { StyleSheet, View } from 'react-native';
import { THEME } from '../../theme'

const Container = (props) => {

    return (
        <View style={ {...styles.wrapper, ...props.style } }>
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
        backgroundColor: THEME.WHITE_COLOR
    }
})

export default Container;