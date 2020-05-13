

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Navbar from './src/components/navbar'
import Searchbar from './src/components/searchbar';
import TodoList from './src/components/todo-list'
import store from './src/store';

export default function App() {
  return (
      <Provider store={store}>        
        <View style={styles.container}>
          <Navbar style={styles.test} title="Todo App" />
          <View style={styles.mainContent}>
            <Searchbar />
            <TodoList />
          </View>
        </View>
      </Provider>
  );
};

const styles = StyleSheet.create({
    container: {
    },
    mainContent: {
      paddingHorizontal: 20
    },
});