import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Navbar from './src/components/navbar'
import AddTodo from './src/components/add-todo';
import TodoList from './src/components/todo-list'
import store from './src/store';
import StoreService from './src/services/service';
import { StoreServiceProvider } from './src/components/service-context';

const service = new StoreService();

export default function App() {
  return (
      <Provider store={store}>
        <StoreServiceProvider value={service}>          
          <View style={styles.container}>
            <Navbar style={styles.test} title="Todo App" />
            <View style={styles.mainContent}>
              <AddTodo />
              <TodoList />
            </View>
          </View>
        </StoreServiceProvider>     
      </Provider>
  );
};

const styles = StyleSheet.create({
    container: {
    },
    mainContent: {
      paddingHorizontal: 20
    }
});