import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "./screens/Movies";
import SingleMovie from "./screens/SingleMovie";
import Favorites from "./screens/Favorites";

const Stack = createStackNavigator();

const MoviesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#e82f3e",
          },
        }}
        name="Home"
        component={Movies}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#e82f3e",
          },
        }}
        name="Movie Details"
        component={SingleMovie}
      />
    </Stack.Navigator>
  );
};

export { MoviesNavigator };
const FavoritesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#e82f3e",
          },
        }}
        name="Favorites"
        component={Favorites}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#e82f3e",
          },
          tabBarOptions: {
            activeTintColor: 'red',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: 'green',
            },
          }
        }}
        name="Movie Details"
        component={SingleMovie}
      />
    </Stack.Navigator>
  );
};

export { FavoritesNavigator };
