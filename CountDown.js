import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import CountDown from "react-native-countdown-component";

export const CountDown1 = () => {
  const { params } = useRoute();

  return (
    <View style={styles.container}>
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

      <Text style={styles.textStyle}>seconds till most likely dead.</Text>
      <Text style={styles.textStyle}></Text>
      <Text style={styles.textStyle}></Text>
      <Text style={styles.textStyle}></Text>
      <Text style={styles.textStyle}></Text>

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
      <Text style={styles.textStyle}>weeks to live.</Text>
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
