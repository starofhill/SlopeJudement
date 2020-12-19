import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./MainPage";
import SubPage from "./SubPage";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubPage"
        component={SubPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
