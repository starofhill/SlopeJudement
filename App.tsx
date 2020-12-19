import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet } from "react-native";
import StackNavigator from "./src/StackNavigator";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <NavigationContainer>
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
