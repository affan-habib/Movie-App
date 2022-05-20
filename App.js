import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "./screens/Movies";
import Reviews from "./screens/Reviews";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { MoviesNavigator } from "./CustomNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              tabBarIcon: () => <Icon name="movie" size={30} color="#e82f3e" />,
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
              },
              headerStyle: {
                backgroundColor: "#e82f3e",
              },
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
            }}
            name="Reviews"
            component={Reviews}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
