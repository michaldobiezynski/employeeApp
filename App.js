import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

import Home from "./screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    marginTop: Constants.statusBarHeight,
    // alignItems: "center",
    // justifyContent: "center",
  },
});