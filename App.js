import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { MoviesNavigator } from "./CustomNavigation";
import { FavoritesNavigator } from "./CustomNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          
          <Tab.Screen
            options={{
              tabBarIcon: () => <Icon name="movie" size={30} color="#0276b4" />,
              headerShown: false,
              tabBarOptions: {
                activeTintColor: '#e91e63',
                labelStyle: {
                  fontSize: 12,
                },
                style: {
                  backgroundColor: 'blue',
                },
              }
            }}
            name="Home"
            component={MoviesNavigator}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Icon name="favorite" size={30} color="#e82f3e" />
              ),
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
              },
              headerStyle: {
                backgroundColor: "#e82f3e",
              },
              headerShown: false
            }}
            name="Favorites"
            component={FavoritesNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
