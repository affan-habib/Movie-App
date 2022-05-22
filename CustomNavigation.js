import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "./screens/Movies";
import MovieDetails from "./shared/MovieDetails";
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
            backgroundColor: "#0296e5",
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
            backgroundColor: "#0296e5",
          },
        }}
        name="Movie Details"
        component={MovieDetails}
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
            backgroundColor: "#0296e5",
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
            backgroundColor: "#0296e5",
          },
          tabBarOptions: {
            activeTintColor: "red",
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: "green",
            },
          },
          tabBarLabelStyle: {
            color: "blue",
          },
        }}
        name="Movie Details"
        component={MovieDetails}
      />
    </Stack.Navigator>
  );
};

export { FavoritesNavigator };
