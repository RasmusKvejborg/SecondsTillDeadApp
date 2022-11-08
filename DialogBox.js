import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import DialogInput from "react-native-dialog-input";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const DialogBox = () => {
  const [isDialogVisible, setDialogVisibility] = useState(true);
  const navigation = useNavigation();

  function calcSeconds(yearsOld) {
    navigation.navigate("CountDown", {
      age: yearsOld,
    });
    setDialogVisibility(false);
  }

  useEffect(() => {
    return navigation.addListener("focus", () => {
      setDialogVisibility(true);
    });
  }, [navigation]);

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
        submitInput={(inputText) => calcSeconds(parseInt(inputText))}
        closeDialog={() => {
          setDialogVisibility(false);
          navigation.navigate("CountDown", {
            seconds: 0,
          });
        }}
      />
      <StatusBar style="auto" />
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
});
