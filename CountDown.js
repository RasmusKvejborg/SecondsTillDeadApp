import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CountDown from "react-native-countdown-component";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CountDown1 = () => {
  const { params } = useRoute();

  const clearOnboarding = async () => {
    try {
      console.log("onboarding cleared");
      await AsyncStorage.removeItem("@age");
    } catch (err) {
      console.log("fejl i clearonboarding: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          clearOnboarding();
        }}
      >
        <CountDown
          size={30}
          until={params?.rs}
          timeToShow={["S"]}
          digitStyle={{
            backgroundColor: "Black",
          }}
          digitTxtStyle={{
            color: "white",
          }}
        />
      </TouchableOpacity>

      <Text style={styles.textStyleSeconds}>
        seconds till most likely dead.
      </Text>

      <CountDown
        size={30}
        until={params?.rs}
        timeToShow={["M"]}
        digitStyle={{
          backgroundColor: "Black",
        }}
        digitTxtStyle={{
          color: "white",
        }}
      />
      <Text style={styles.textStyleWeeks}>weeks to live.</Text>
      <Text style={styles.textStyleDots}>
        .....................................................
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyleSeconds: {
    color: "white",
    marginBottom: 100,
  },
  textStyleWeeks: {
    color: "white",
    marginBottom: 40,
  },
  textStyleDots: {
    color: "white",
    marginBottom: 40,
    fontSize: 20,
  },
});
