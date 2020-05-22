import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Container from '../../components/container'
import { connect } from 'react-redux';
import { changeTodo, removeTodo } from '../../actions';
import ItemDetail from '../../components/item-detail'

class DetailScreen extends Component {

    render() {
        const { route, navigation, stateTodos, onChangeTodo, onRemove } = this.props;
        const { item } = route.params;

        const currentItemIndex = stateTodos.findIndex(({id}) => id === item.id);
        const currentItem = stateTodos[currentItemIndex]        
        
        if (currentItem) {
            return (
                <Container style={styles.wrapper}>
                    <ItemDetail currentItem={currentItem} 
                                navigation={navigation}
                                onChangeTodo={onChangeTodo}
                                onRemove={onRemove} />
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


