import React, { useState } from "react";
import { StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./src/StackNavigator";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar hidden={false} barStyle="dark-content" />
      <StackNavigator setLoading={setLoading} />
      {loading && <ActivityIndicator size="large" style={styles.loading} />}
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
