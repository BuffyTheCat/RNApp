import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Navbar from './src/components/navbar'
import MainScreen  from './src/screens/main-screen/'
import DetailsScreen from './src/screens/detail-screen'
import store from './src/store';
import StoreService from './src/services/service';
import { StoreServiceProvider } from './src/components/service-context';


const service = new StoreService();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StoreServiceProvider value={service}>          
          <Navbar title="Todo App" />
          <Stack.Navigator initialRouteName="Home"
                            screenOptions={{
                              headerShown: false
                            }}>
            <Stack.Screen name="Home" component={MainScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </StoreServiceProvider>     
      </Provider>
    </NavigationContainer>
  );
};
