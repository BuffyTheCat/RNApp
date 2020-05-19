import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Container from '../../components/container'

const DetailScreen = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <Container>
            <View style={styles.cardHead}>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        textAlign: "center"
    },
    cardHead: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    }
})

export default DetailScreen;