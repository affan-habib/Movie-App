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
        name="Home"
        component={Movies}
      />
       <Stack.Screen
        name="Movie Details"
        component={SingleMovie}
      />
    </Stack.Navigator>
  );
}

export {MoviesNavigator}