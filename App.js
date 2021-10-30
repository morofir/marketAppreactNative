import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, NavigationContainer } from "react-native";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
