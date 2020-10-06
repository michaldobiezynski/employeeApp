import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useReducer } from "react";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import CreateEmployee from "./screens/CreateEmployee";
import Profile from "./screens/Profile";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer, initialState } from "./reducers/reducer";

// const store = createStore(reducer);

export const MyContext = createContext();

const Stack = createStackNavigator();

const myOptions = {
  title: "My Sweet Home",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#006aff",
  },
};

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen
          name="Create"
          component={CreateEmployee}
          options={{ ...myOptions, title: "Create Employee" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ ...myOptions, title: "Profile" }}
        />
      </Stack.Navigator>
    </View>
  );
}
export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </MyContext.Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    marginTop: Constants.statusBarHeight,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
