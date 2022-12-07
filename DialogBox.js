import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const DialogBox = () => {
  const navigation = useNavigation();

  function calcSeconds(yearsOld) {
    const year = new Date().getFullYear();
    const countdownDateTime = new Date(
      "01 jan " + (100 - yearsOld + year) + " 18:00:00"
    ).getTime();
    const currentTime = new Date().getTime();
    const remainingTime = countdownDateTime - currentTime;
    const remainingSeconds = Math.floor(remainingTime / 1000);
    navigation.navigate("CountDown", {
      age: yearsOld,
      rs: remainingSeconds,
    });
  }

  const [age3, setAge3] = useState();

  const saveFunction = async () => {
    try {
      const value = await AsyncStorage.setItem("@age", age1);
      console.log("age should be saved now");
    } catch (error) {
      console.log("eRrOr MsG: ", error);
    }
  };

  const load = async () => {
    try {
      let age3 = await AsyncStorage.getItem("@age");
      console.log("prev age: ", age3);
      if (age3 !== null) {
        setAge3(age3);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your age.</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => (this.age1 = text)}
      />

      <TouchableOpacity
        onPress={() => {
          load();
          saveFunction();
          var age1 = Number(this.age1);
          if (age1 >= 0 && age1 <= 99 && Number.isInteger(age1)) {
            calcSeconds(age1);
          } else if (age1 >= 100) {
            alert("Really?? Your real age please.");
          } else {
            alert("Enter a valid age");
          }
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </View>
      </TouchableOpacity>
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
  text: {
    color: "white",
    fontSize: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 45,
    backgroundColor: "black",
    borderColor: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 8,
    margin: 100,
    width: 80,
    color: "white",
    fontSize: 25,
  },
});
