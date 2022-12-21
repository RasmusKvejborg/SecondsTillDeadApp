import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CountDown from "react-native-countdown-component";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CountDown1 = () => {
  const { params } = useRoute();

  // Number of white dots to be displayed on inital load. Params?.rs is number of seconds devided by seconds in a week (604800)
  var numberOfWhiteDots = params?.rs / 604800;
  // Number of grey dots. 5167 is the number of weeks in a life, so (5167-numberOfWhiteDots) is = weeks already lived.
  // if you stared at the screen for a week, you would have to reload it to see a change in dots, it doesnt upload live.
  var numberOfGreyDots = 5167 - numberOfWhiteDots;

  var whiteDotsStr = "";
  for (var i = 1; i < numberOfWhiteDots; i++) {
    whiteDotsStr += ".";
  }

  var greyDotsStr = "";
  for (var i = 1; i < numberOfGreyDots; i++) {
    greyDotsStr += ".";
  }

  const [greyDots, SetGreyDots] = useState(greyDotsStr); //91 dots per line
  const [whiteDots, setWhiteDots] = useState(whiteDotsStr);

  const clearOnboarding = async () => {
    try {
      console.log("onboarding cleared");
      await AsyncStorage.removeItem("@age");
    } catch (err) {
      console.log("fejl i clearonboarding: ", err);
    }
  };

  const removeWhiteDots = () => {
    setWhiteDots(whiteDots.substring(0, whiteDots.length - 1));
  };

  const addGreyDots = () => {
    SetGreyDots(greyDots + ".");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          clearOnboarding();
          removeWhiteDots();
          addGreyDots();
        }}
      >
        <CountDown
          size={28}
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
        Seconds till most likely dead.
      </Text>

      <CountDown
        size={28}
        until={params?.rs}
        timeToShow={["M"]}
        digitStyle={{
          backgroundColor: "Black",
        }}
        digitTxtStyle={{
          color: "white",
        }}
      />
      <Text style={styles.textStyleWeeks}>Weeks left to live. </Text>

      <Text style={styles.marginstyle}>
        <Text style={styles.textStyleLivedDots}>{greyDots}</Text>
        <Text style={styles.textStyleLeftDots}>{whiteDots}</Text>
      </Text>

      <Text style={styles.textStyleDotsExplainer}>
        Grey dots are weeks already lived.{" "}
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
    marginBottom: 35,
  },
  textStyleWeeks: {
    color: "white",
    marginBottom: 35,
  },
  textStyleDotsExplainer: {
    color: "white",
    fontSize: 10,
  },
  textStyleLivedDots: {
    color: "grey",
  },
  textStyleLeftDots: {
    color: "white",
  },
  marginstyle: {
    marginHorizontal: 13,
    marginBottom: 5,
    lineHeight: 5,
    fontSize: 15,
  },
});
