import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import NestedScreen from "./screens/NestedScreen";
import Movies from "./screens/Movies";
import SingleMovie from "./screens/SingleMovie";


const Stack = createStackNavigator();

const MoviesNavigator = () => {
  return (
    <Stack.Navigator >
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
}

export {MoviesNavigator}