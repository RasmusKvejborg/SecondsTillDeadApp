import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";
import CountDown from "react-native-countdown-component";
import DialogInput from "react-native-dialog-input";

export default function App() {
  function calcSeconds(alder) {
    setSeconds(seconds * 10000000);
  }
  const [seconds, setSeconds] = useState(22705920000);

  const [isDialogVisible, setDialogVisibility] = useState(true);

  return (
    <View style={styles.container}>
      <DialogInput
        isDialogVisible={isDialogVisible}
        message={"Enter your age."}
        hintInput={"E.g. 45"}
        textInputProps={{
          keyboardType: "numeric",
        }}
        submitText="Start seconds"
        submitInput={(inputText) => {
          calcSeconds(parseInt(inputText));
          setDialogVisibility(false);
        }}
        closeDialog={() => {
          setDialogVisibility(false);
        }}
      ></DialogInput>

      <CountDown
        size={30}
        until={seconds}
        timeToShow={["S"]}
        timeLabels={{ s: "Seconds till most likely dead" }}
        digitStyle={{
          backgroundColor: "black",
        }}
        digitTxtStyle={{
          color: "white",
        }}
        timeLabelStyle={{
          color: "white",
        }}
      ></CountDown>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
