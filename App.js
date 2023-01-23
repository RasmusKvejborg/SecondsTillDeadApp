import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DialogBox } from "./DialogBox.js";
import { CountDown1 } from "./CountDown.js";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import {
  ActivityIndicator,
  NativeAppEventEmitter,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeColors } from "react-navigation";

const page = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <page.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            color: "black",
          },
        }}
      >
        <page.Screen name="DialogBox" component={DialogBox} />
        <page.Screen
          name="CountDown"
          options={{
            // StatusBar: { backgroundColor: "black" },
            // navigationBarHidden: true,
            navigationBarColor: "black",
            headerStyle: {
              backgroundColor: "black",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={async () => {
                  await AsyncStorage.removeItem("@age");
                  navigationRef.navigate("DialogBox");
                }}
              >
                <Text style={styles.backButton}>Go back </Text>
              </TouchableOpacity>
            ),
          }}
          component={CountDown1}
        />
      </page.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backButton: {
    color: "grey",
  },
});
