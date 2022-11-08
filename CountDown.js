import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import CountDown from "react-native-countdown-component";

export const CountDown1 = () => {
  const { params } = useRoute();
  const year = new Date().getFullYear();
  const [expiryTime, setExpiryTime] = useState("01 jan 2023 18:00:00");
  const [seconds, setSeconds] = useState(10);

  const countdownTimer = () => {
    const countdownDateTime = new Date(expiryTime).getTime();
    console.log(expiryTime);
    const currentTime = new Date().getTime();
    const remainingTime = countdownDateTime - currentTime;
    const remainingSeconds = Math.floor(remainingTime / 1000);

    setSeconds(remainingSeconds);
  };

  useEffect(() => {
    setExpiryTime("01 jan " + (100 - params?.age + year) + " 18:00:00");
  });

  useEffect(() => {
    countdownTimer();
  });

  return (
    <View style={styles.container}>
      <CountDown
        size={30}
        until={seconds}
        timeToShow={["S"]}
        timeLabels={{ s: "Seconds till most likely dead" }}
        digitStyle={{
          backgroundColor: "Black",
        }}
        digitTxtStyle={{
          color: "white",
        }}
      />
      <Text style={styles.textStyle}>seconds to actually show: {seconds}</Text>
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
  textStyle: {
    color: "white",
  },
});
