import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DialogBox } from "./DialogBox.js";
import { CountDown1 } from "./CountDown.js";
import { NavigationContainer } from "@react-navigation/native";
import { NativeAppEventEmitter } from "react-native";

// import { StyleSheet, Text, View, Alert, Button } from "react-native";
// import CountDown from "react-native-countdown-component";
// import DialogInput from "react-native-dialog-input";

const page = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <page.Navigator>
        <page.Screen name="DialogBog" component={DialogBox} />
        <page.Screen name="CountDown" component={CountDown1} />
      </page.Navigator>
    </NavigationContainer>
  );
}
