import * as React from "react";
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
              tabBarIcon: () => <Icon color="#0296e5" name="movie" size={30} />,
              headerShown: false,
            }}
            name="Home"
            component={MoviesNavigator}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Icon name="favorite" color="#0296e5" size={30} />
              ),
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
              },
              headerStyle: {
                backgroundColor: "#0296e5",
              },
              headerShown: false,
            }}
            name="Favorites"
            component={FavoritesNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
