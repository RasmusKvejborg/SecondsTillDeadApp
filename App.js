import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DialogBox } from "./DialogBox.js";
import { CountDown1 } from "./CountDown.js";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, NativeAppEventEmitter } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const page = createNativeStackNavigator();

export default function App() {
  // const [ageIsSubmitted, setAgeIsSubmitted] = useState(false);
  // const [loading, setLoading] = useState(true);

  // const checkIfAgeIsSubmitted = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("@age");
  //     if (value !== null) {
  //       setAgeIsSubmitted(true);
  //     }
  //   } catch (err) {
  //     console.log("MSG ERR in APP: ", err);
  //   } finally {
  //     setLoading(false); // when this function is done, loading is set to false, so its a way of waiting for it I guess. ***
  //   }
  // };

  // useEffect(() => {
  //   checkIfAgeIsSubmitted();
  // }, []);

  return (
    <NavigationContainer>
      {/* {loading ? (
        <ActivityIndicator size={"large"} /> // if it is loading, show a loading activityIndicator. If its done loading, then show all of the below.
      ) : ( */}
      <page.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      >
        <>
          <page.Screen name="DialogBog" component={DialogBox} />
          <page.Screen name="CountDown" component={CountDown1} />
        </>
      </page.Navigator>
      {/* )} */}
    </NavigationContainer>
  );
}
