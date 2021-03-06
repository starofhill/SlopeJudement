import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./MainPage";
import SubPage from "./SubPage";
import CollagePage from "./CollagePage";
import ResultPage from "./ResultPage";

const Stack = createStackNavigator();

const StackNavigator: React.FC<{
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setLoading }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        options={{
          headerShown: false,
          headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
        }}
      >
        {(props) => (
          <MainPage
            navigation={props.navigation}
            route={props.route}
            setLoading={setLoading}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="SubPage"
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
          headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
        }}
      >
        {(props) => (
          <SubPage
            navigation={props.navigation}
            route={props.route}
            setLoading={setLoading}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="ResultPage"
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
          headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
        }}
      >
        {(props) => (
          <ResultPage
            navigation={props.navigation}
            route={props.route}
            setLoading={setLoading}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="CollagePage"
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
          headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
        }}
      >
        {(props) => (
          <CollagePage
            navigation={props.navigation}
            route={props.route}
            setLoading={setLoading}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
