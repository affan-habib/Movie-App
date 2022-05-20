import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from './screens/Movies';
import SingleMovie from './screens/SingleMovie';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Provider } from "react-redux";
import  store  from "./reducers/store";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{
            tabBarIcon: () => (
                <Icon name="movie" size={30} color="blue" />
            ),
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#00669a",
            },
          }} name="Home" component={Movies} />
        <Tab.Screen options={{
            tabBarIcon: () => (
                <Icon name="favorite" size={30} color="#900" />
            ),
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#00669a",
            },
          }} name="Settings" component={SingleMovie} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}